import { motion } from "framer-motion";

interface TimelineEntry {
  type: "education" | "publication-journal" | "publication-conference" | "career" | "award" | "future";
  title: string;
  subtitle?: string;
  detail?: string;
  doi?: string;
}

interface YearBlock {
  year: string;
  entries: TimelineEntry[];
}

const years: YearBlock[] = [
  {
    year: "2020",
    entries: [
      {
        type: "career",
        title: "Research Assistant",
        subtitle: "Shandong University of Technology, Shandong, China",
        detail: "Began research work in data handling, experiment design, research writing, and ethical compliance (2020–2023).",
      },
    ],
  },
  {
    year: "2022",
    entries: [
      {
        type: "publication-conference",
        title: "Acceptance of chatbot based on emotional intelligence through machine learning algorithm",
        subtitle: "ICFEICT 2022, IEEE",
        doi: "10.1109/ICFEICT57213.2022.00111",
      },
      {
        type: "publication-conference",
        title: "Research status and development suggestions of hawthorn pitting machine in China",
        subtitle: "Scientific Journal of Intelligent Systems Research",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        type: "education",
        title: "B.Sc. in Computer Science and Engineering",
        subtitle: "Shandong University of Technology",
        detail: "Completed undergraduate degree in June 2023.",
      },
      {
        type: "publication-conference",
        title: "Enhancing surgical precision: Deep learning-based depth estimation in minimally invasive surgery with the MiDaS model",
        subtitle: "Springer",
        doi: "10.1007/978-3-031-70687-5_5",
      },
      {
        type: "publication-journal",
        title: "ARCS approach to PTA-based programming language practice sessions",
        subtitle: "Education and Information Technologies",
        doi: "10.1007/s10639-023-11740-6",
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        type: "education",
        title: "Started M.Sc. in Computer Science and Electronic Engineering",
        subtitle: "Hunan University, China",
      },
      {
        type: "award",
        title: "Chinese Government Scholarship (CSC)",
        subtitle: "Hunan University",
      },
    ],
  },
  {
    year: "2025",
    entries: [
      {
        type: "publication-journal",
        title: "Generative AI–Guided Sentinel for Self-Optimizing Federated Cybersecurity and Intelligent Threat Detection",
        subtitle: "Journal of Hunan University Natural Sciences, 52(12)",
      },
      {
        type: "publication-journal",
        title: "Generative Models for Personalized Federated Learning via Class-Separable Latent Spaces and Meta-Adaptation",
        subtitle: "Journal of Hunan University Natural Sciences, 52(11)",
      },
    ],
  },
  {
    year: "2026",
    entries: [
      {
        type: "publication-journal",
        title: "Fair client selection and encrypted aggregation: a federated learning framework for intrusion detection in resource-constrained networks",
        subtitle: "Cluster Computing, 29(3), 164",
      },
      {
        type: "future",
        title: "M.Sc. Completion (Expected)",
        subtitle: "Hunan University · June 2026",
        detail: "Continuing research in privacy-preserving AI, cybersecurity, and distributed intelligent systems.",
      },
    ],
  },
];

const typeConfig: Record<string, { label: string; borderClass: string }> = {
  education: { label: "Education", borderClass: "border-l-primary/40" },
  "publication-journal": { label: "Journal", borderClass: "border-l-accent" },
  "publication-conference": { label: "Conference", borderClass: "border-l-navy-light" },
  career: { label: "Career", borderClass: "border-l-primary/25" },
  award: { label: "Award", borderClass: "border-l-gold-deep" },
  future: { label: "Future", borderClass: "border-l-accent" },
};

const dotConfig: Record<string, string> = {
  education: "bg-primary/40",
  "publication-journal": "bg-accent",
  "publication-conference": "bg-navy-light",
  career: "bg-primary/25",
  award: "bg-gold-deep",
  future: "bg-accent",
};

const labelConfig: Record<string, string> = {
  education: "text-primary/70 bg-primary/5",
  "publication-journal": "text-gold-deep bg-gold-muted",
  "publication-conference": "text-navy-light bg-primary/5",
  career: "text-muted-foreground bg-secondary",
  award: "text-gold-deep bg-gold-muted",
  future: "text-accent bg-gold-muted",
};

const YearbookSection = () => {
  return (
    <section id="journey" className="section-padding bg-section-alt">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label">Yearbook</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            A timeline of research, education, publications, and scholarship milestones.
          </p>
        </motion.div>

        <div>
          {years.map((yearBlock, yi) => (
            <motion.div
              key={yearBlock.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: yi * 0.03 }}
              className="mb-12"
            >
              <div className="mb-5">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary/40 select-none">{yearBlock.year}</span>
              </div>

              <div className="space-y-0 border-l border-border ml-3">
                {yearBlock.entries.map((entry, ei) => {
                  const cfg = typeConfig[entry.type];
                  return (
                    <motion.div
                      key={ei}
                      className={`relative pl-7 py-3 border-l-2 -ml-px ${cfg.borderClass}`}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: ei * 0.03 }}
                    >
                      <div className={`absolute -left-[5px] top-4 w-2 h-2 rounded-full ${dotConfig[entry.type]}`} />

                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-sm tracking-wider uppercase ${labelConfig[entry.type]}`}>
                        {cfg.label}
                      </span>

                      <h4 className="text-[14px] font-semibold text-foreground leading-snug mt-1">{entry.title}</h4>

                      {entry.subtitle && <p className="text-xs text-muted-foreground mt-0.5">{entry.subtitle}</p>}

                      {entry.detail && <p className="text-[13px] text-muted-foreground/80 leading-relaxed mt-1.5">{entry.detail}</p>}

                      {entry.doi && (
                        <a
                          href={`https://doi.org/${entry.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[11px] text-accent hover:text-gold-deep transition-colors mt-1 font-medium"
                        >
                          DOI: {entry.doi} ↗
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-border pt-10 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-5 gap-2">
            {[
              { n: "7+", l: "Publications" },
              { n: "3", l: "Journal Papers" },
              { n: "4", l: "Conference Papers" },
              { n: "2", l: "Working Papers" },
              { n: "3", l: "Major Awards" },
            ].map((s) => (
              <div key={s.l} className="text-center py-3">
                <p className="font-display text-xl font-bold text-foreground">{s.n}</p>
                <p className="text-[10px] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YearbookSection;
