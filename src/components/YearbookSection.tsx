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

const typeStyle: Record<TimelineEntry["type"], string> = {
  education: "bg-primary/12 text-primary",
  "publication-journal": "bg-accent/15 text-accent",
  "publication-conference": "bg-secondary text-secondary-foreground",
  career: "bg-primary/10 text-primary",
  award: "bg-gold-muted text-gold-deep",
  future: "bg-accent/12 text-accent",
};

const typeLabel: Record<TimelineEntry["type"], string> = {
  education: "Education",
  "publication-journal": "Journal",
  "publication-conference": "Conference",
  career: "Career",
  award: "Award",
  future: "Future",
};

const YearbookSection = () => {
  return (
    <section id="journey" className="section-padding bg-section-alt relative overflow-hidden">
      <div className="aurora-bg">
        <div className="aurora-orb w-72 h-72 -left-20 top-14 bg-accent/18" />
        <div className="aurora-orb w-80 h-80 -right-20 bottom-10 bg-primary/16" style={{ animationDelay: "1.3s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Yearbook</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-3xl">
            A curated timeline of research milestones, publications, academic achievements, and future direction.
          </p>
        </motion.div>

        <div className="space-y-6">
          {years.map((yearBlock, yearIndex) => (
            <motion.div
              key={yearBlock.year}
              className="rounded-2xl border border-border bg-card/88 backdrop-blur-sm p-4 sm:p-5 md:p-6 soft-spotlight"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: yearIndex * 0.04 }}
            >
              <div className="grid md:grid-cols-[96px_1fr] gap-4 md:gap-6">
                <div>
                  <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2 text-center md:sticky md:top-24">
                    <p className="font-display text-2xl font-bold text-primary">{yearBlock.year}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {yearBlock.entries.map((entry, entryIndex) => (
                    <motion.article
                      key={`${yearBlock.year}-${entryIndex}`}
                      className="rounded-xl border border-border bg-background/75 px-4 py-3.5 elevated-card tilt-hover"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.28, delay: entryIndex * 0.04 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] uppercase tracking-[0.12em] font-semibold px-2 py-1 rounded-full ${typeStyle[entry.type]}`}>
                          {typeLabel[entry.type]}
                        </span>
                      </div>

                      <h3 className="text-sm md:text-[15px] font-semibold text-foreground leading-snug">{entry.title}</h3>

                      {entry.subtitle && <p className="text-xs text-muted-foreground mt-1">{entry.subtitle}</p>}
                      {entry.detail && <p className="text-xs md:text-[13px] text-muted-foreground/90 leading-relaxed mt-1.5">{entry.detail}</p>}

                      {entry.doi && (
                        <a
                          href={`https://doi.org/${entry.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[11px] text-accent hover:underline mt-2 font-medium"
                        >
                          DOI: {entry.doi} ↗
                        </a>
                      )}
                    </motion.article>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { n: "7+", l: "Publications" },
            { n: "3", l: "Journal Papers" },
            { n: "4", l: "Conference Papers" },
            { n: "2", l: "Working Papers" },
            { n: "3", l: "Major Awards" },
          ].map((stat) => (
            <div key={stat.l} className="rounded-xl border border-border bg-card/88 backdrop-blur-sm py-3 text-center elevated-card">
              <p className="font-display text-xl font-bold text-foreground">{stat.n}</p>
              <p className="text-[11px] text-muted-foreground">{stat.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default YearbookSection;
