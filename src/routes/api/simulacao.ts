import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/simulacao")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as {
          image?: string;
          mimeType?: string;
          prompt?: string;
          instruction?: string;
        };
        if (!body.image || !body.prompt) {
          return new Response("Imagem e tratamento são obrigatórios", { status: 400 });
        }

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const dataUrl = body.image.startsWith("data:")
          ? body.image
          : `data:${body.mimeType ?? "image/jpeg"};base64,${body.image}`;

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "google/gemini-3-pro-image",
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text:
                      `Edite esta fotografia de forma sutil e realista para criar uma SIMULAÇÃO ILUSTRATIVA de: ${body.prompt}. ` +
                      (body.instruction ? `${body.instruction} ` : "") +
                      "Preserve a identidade, a iluminação, o enquadramento e as proporções naturais da pessoa. " +
                      "Não exagere o efeito, não altere idade, etnia ou traços de identidade. " +
                      "O resultado deve parecer uma possibilidade plausível e conservadora, nunca uma promessa de resultado.",
                  },
                  { type: "image_url", image_url: { url: dataUrl } },
                ],
              },
            ],
            modalities: ["image", "text"],
            stream: true,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          return new Response(await upstream.text(), { status: upstream.status });
        }

        return new Response(upstream.body, {
          headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
        });
      },
    },
  },
});