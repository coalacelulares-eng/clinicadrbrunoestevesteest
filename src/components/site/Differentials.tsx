import {
  Cpu,
  HeartHandshake,
  Landmark,
  Leaf,
  Microscope,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ITEMS = [
  { icon: Microscope, id: "item1" },
  { icon: Cpu, id: "item2" },
  { icon: Workflow, id: "item3" },
  { icon: Leaf, id: "item4" },
  { icon: Users, id: "item5" },
  { icon: Landmark, id: "item6" },
  { icon: HeartHandshake, id: "item7" },
  { icon: Sparkles, id: "item8" },
];

export function Differentials() {
  const { t } = useI18n();

  return (
    <section className="px-6 py-24" id="diferenciais">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="max-w-2xl">
          <span className="eyebrow">{t("diff.eyebrow")}</span>
          <h2 className="title-display mt-4 text-3xl md:text-5xl">
            {t("diff.title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.id}
              data-reveal="scale"
              className="tilt-card vellum relative rounded-3xl p-7"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-full border border-gold/40">
                  <item.icon className="size-5 text-gold" />
                </span>
                <h3 className="title-display mt-6 text-xl">{t(`diff.${item.id}.t`)}</h3>
                <p className="section-lede-sm mt-2">{t(`diff.${item.id}.d`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
