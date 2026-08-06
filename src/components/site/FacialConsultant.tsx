import { FACIAL_GOALS } from "@/lib/smile-consultant";

import { SmileConsultant } from "./SmileConsultant";

export function FacialConsultant() {
  return (
    <SmileConsultant
      id="consultor-facial"
      goals={FACIAL_GOALS}
      eyebrow="Harmonização & Dermatologia"
      title={
        <>
          Simule a sua <span className="gold-text">harmonização facial</span>.
        </>
      }
      description="Visualize uma projeção ilustrativa de harmonização orofacial ou de tratamentos dermatológicos, com resultados naturais e proporcionais ao seu rosto. A simulação é apenas orientativa e será refinada na avaliação presencial."
      stepLabel="Passo 1 · O que você deseja tratar?"
      reportTitle="Análise Facial Inteligente"
      ctaTitle="Pronto para o seu protocolo facial?"
    />
  );
}
