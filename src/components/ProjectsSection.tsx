import { motion } from "framer-motion";

const projects = [
  {
    title: "Federated IDS for Resource-Constrained Networks",
    desc: "Research framework combining fair client selection and encrypted aggregation for privacy-preserving intrusion detection.",
  },
  {
    title: "Generative AI–Guided Federated Cybersecurity",
    desc: "Self-optimizing threat detection strategy integrating generative AI with federated cyber-defense workflows.",
  },
  {
    title: "Emotion-Aware Chatbot Acceptance Analysis",
    desc: "Machine learning-based study of emotionally intelligent chatbot acceptance and interaction behavior.",
  },
  {
    title: "Deep Learning for Surgical Depth Estimation",
    desc: "MiDaS-based depth estimation approach to support improved precision in minimally invasive surgery.",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected Work</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="border border-border rounded-lg p-5 hover:border-accent/30 transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
