import { motion } from "framer-motion";
import { Brain, Shield, Wifi, HeartPulse, BarChart3, Lightbulb } from "lucide-react";

const interests = [
  { icon: Brain, label: "Federated Learning", description: "Client selection, secure aggregation, and resource-aware model training." },
  { icon: Wifi, label: "Internet of Things (IoT)", description: "Learning and security methods for distributed and constrained IoT environments." },
  { icon: Shield, label: "Security and Privacy", description: "Privacy-preserving intelligence, encrypted computation, and secure collaboration." },
  { icon: BarChart3, label: "Cybersecurity", description: "Intrusion detection and adaptive cyber defense with machine learning models." },
  { icon: Lightbulb, label: "Large Language Models", description: "Generative-AI guided security and intelligent decision support systems." },
  { icon: HeartPulse, label: "AI & NLP", description: "Applied AI/NLP systems including chatbot intelligence and language-aware modeling." },
];

const ResearchInterestsSection = () => {
  return (
    <section className="section-padding bg-section-alt relative overflow-hidden">
      <div className="aurora-bg">
        <div className="aurora-orb w-72 h-72 -left-20 top-0 bg-primary/20" />
        <div className="aurora-orb w-72 h-72 -right-20 bottom-6 bg-accent/20" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Interests</p>
          <h2 className="section-title">Research Interests</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              className="elevated-card shimmer-border tilt-hover rounded-xl p-5 bg-card/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <item.icon className="w-5 h-5 text-accent mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
