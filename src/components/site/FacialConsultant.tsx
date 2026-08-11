import { FACIAL_GOALS } from "@/lib/smile-consultant";
import { SmileConsultant } from "./SmileConsultant";

export function FacialConsultant() {
  return (
    <SmileConsultant
      id="consultor-facial"
      goals={FACIAL_GOALS}
      type="facial"
    />
  );
}
