import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: GraduationCap,
    title: "Chinese Government Scholarship (CSC)",
    description: "Received the Chinese Government Scholarship at Hunan University.",
    highlight: true,
  },
  {
    icon: Award,
    title: "Provincial Merit Scholarship",
    description: "Received merit-based provincial scholarship from the government of Shandong Province, China.",
  },
  {
    icon: BadgeCheck,
    title: "Poet Recitation Certification",
    description: "Recognized with poet recitation certification from Shandong University of Technology.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements & Awards</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className={`rounded-lg p-5 border transition-all duration-300 ${
                a.highlight ? "bg-card border-accent/40 md:col-span-2 shadow-sm" : "bg-card border-border hover:border-accent/30"
              }`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md shrink-0 bg-accent/10">
                  <a.icon className="w-4 h-4 text-accent" />
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-1 text-foreground">{a.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
