import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/analise")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { image?: string; goal?: string; lang?: string };
        if (!body.image) return new Response("Imagem obrigatória", { status: 400 });

        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: { "Lovable-API-Key": key, "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "google/gemini-3.6-flash",
            messages: [
              {
                role: "system",
                content:
                  "Você é um consultor estético odontológico da Clínica Thebit. Escreva em português do Brasil, tom acolhedor e premium. " +
                  "Nunca faça diagnóstico nem prometa resultado: use linguagem ilustrativa e recomende avaliação presencial. " +
                  "Responda SOMENTE com JSON válido no formato " +
                  '{"resumo": string, "observacoes": string[], "protocolo": string[]} ' +
                  "com 4 observações curtas (cor, alinhamento, simetria, gengiva, espaçamentos, formato, desgastes, harmonia) e 3 a 4 itens de protocolo sugerido.",
              },
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: `Objetivo informado pelo paciente: ${body.goal ?? "avaliação geral"}. Analise a fotografia do sorriso.`,
                  },
                  { type: "image_url", image_url: { url: body.image } },
                ],
              },
            ],
          }),
        });

        if (!upstream.ok) {
          return new Response(await upstream.text(), { status: upstream.status });
        }

        const json = (await upstream.json()) as {
          choices?: { message?: { content?: string } }[];
        };
        const raw = json.choices?.[0]?.message?.content ?? "";
        const match = raw.match(/\{[\s\S]*\}/);

        let parsed: unknown;
        try {
          parsed = JSON.parse(match?.[0] ?? raw);
        } catch {
          parsed = { resumo: raw, observacoes: [], protocolo: [] };
        }

        return new Response(JSON.stringify(parsed), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});