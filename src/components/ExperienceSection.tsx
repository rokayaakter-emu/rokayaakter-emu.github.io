import { motion } from "framer-motion";

const experiences = [
  {
    role: "Research Assistant",
    company: "Shandong University of Technology",
    duration: "2020 – 2023",
    points: [
      "Managed research datasets and data preparation workflows",
      "Designed and executed experiments for AI and cybersecurity studies",
      "Contributed to academic manuscripts and publication drafting",
      "Ensured compliance with research ethics and reporting standards",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-title">Professional Experience</h2>
      </motion.div>

      <div className="mt-10 space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="border-l border-border pl-6 py-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <h3 className="text-sm font-semibold text-foreground">
              {exp.role} — {exp.company}
            </h3>

            <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>

            <ul className="text-xs text-muted-foreground space-y-1 list-disc ml-4">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
