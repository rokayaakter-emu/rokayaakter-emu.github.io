import { motion } from "framer-motion";

const AboutSection = () => {
  return (
      <section id="about" className="section-padding max-w-6xl mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Research Profile</h2>

          <div className="grid md:grid-cols-[2fr_1fr] gap-10 mt-8">

            {/* LEFT CONTENT */}
            <div className="space-y-5 text-muted-foreground leading-relaxed text-[15px] text-justify [hyphens:auto] max-w-3xl tracking-[0.01em]">

              <p>
                I am <strong className="text-foreground">Rokaya Akter</strong>, an M.Sc. student in
                <strong className="text-foreground"> Computer Science and Electronic Engineering</strong> at
                <strong className="text-foreground"> Hunan University</strong> (expected June 2026).
                My academic and research focus is on machine learning, federated learning, and cybersecurity.
              </p>

              <p>
                I completed my B.Sc. in Computer Science and Engineering from
                <strong className="text-foreground"> Shandong University of Technology</strong> in June 2023,
                and then continued advanced study and research in AI-driven intelligent systems.
              </p>

              <p>
                My publications cover chatbot emotional intelligence, surgical depth estimation, programming
                education, and privacy-preserving federated intrusion detection for resource-constrained networks.
                These works appear across IEEE, Springer, and peer-reviewed journals.
              </p>

              <p>
                I served as a <strong className="text-foreground">Research Assistant at Shandong University of Technology</strong>
                from 2020 to 2023, working on data handling, experiment design, academic writing,
                and research ethics compliance.
              </p>

              <p>
                I am passionate about advancing privacy-preserving AI and contributing to impactful
                scholarly projects in machine learning, distributed systems, and secure intelligent networks.
              </p>

            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="space-y-4">

              <div className="border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Education</p>
                <p className="font-semibold text-foreground text-sm">M.Sc. in CSEE</p>
                <p className="text-xs text-muted-foreground">Hunan University, China</p>
                <p className="text-xs text-accent font-semibold mt-1">Expected: June 2026</p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Undergraduate</p>
                <p className="font-semibold text-foreground text-sm">B.Sc. in CSE</p>
                <p className="text-xs text-muted-foreground">Shandong University of Technology</p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Publications</p>
                <p className="font-bold text-foreground text-2xl">7+</p>
                <p className="text-xs text-muted-foreground">Peer-reviewed publications</p>
              </div>

              <div className="border border-border rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Experience</p>
                <p className="font-bold text-foreground text-2xl">3</p>
                <p className="text-xs text-muted-foreground">Years as Research Assistant</p>
              </div>

            </div>

          </div>
        </motion.div>
      </section>
  );
};

export default AboutSection;