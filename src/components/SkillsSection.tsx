import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Research Skills",
    skills: ["Data Handling", "Experiment Design", "Academic Writing", "Ethical Compliance", "Literature Review"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Federated Learning", "LLM Applications", "NLP"],
  },
  {
    category: "Security Focus",
    skills: ["Cybersecurity", "Intrusion Detection", "Privacy-Preserving Learning", "Encrypted Aggregation"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java"],
  },
  {
    category: "Data & Systems",
    skills: ["Database Systems", "IoT Systems", "Distributed Systems"],
  },
  {
    category: "Applied Domains",
    skills: ["Healthcare AI", "Chatbot Intelligence", "Programming Education Analytics"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">Technical Competencies</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            className="border border-border rounded-lg p-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <h3 className="font-semibold text-foreground text-sm mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill} className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
