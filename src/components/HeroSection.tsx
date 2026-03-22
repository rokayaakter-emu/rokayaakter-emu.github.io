import { motion } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import profileAvatar from "@/assets/Rokaya Akter.jpg";

const metrics = [
  { value: "7+", label: "Publications" },
  { value: "2026", label: "M.Sc. Expected" },
  { value: "4", label: "Core Domains" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center border-b border-border overflow-hidden">
      <div className="aurora-bg">
        <div className="aurora-orb w-80 h-80 left-[-6rem] top-[-4rem] bg-accent/40" />
        <div className="aurora-orb w-[26rem] h-[26rem] right-[-8rem] top-20 bg-primary/30" style={{ animationDelay: "1.1s" }} />
        <div className="aurora-orb w-72 h-72 left-1/3 -bottom-24 bg-accent/30" style={{ animationDelay: "2.1s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--background))_5%,hsl(var(--background)/0.75)_45%,hsl(var(--background))_95%)]" />
        <div className="absolute inset-0 opacity-40 [background:linear-gradient(to_right,hsl(var(--border)/0.35)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.35)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-28 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1.5 mb-6">
              <span className="text-[11px] uppercase tracking-[0.16em] text-accent font-semibold">Hunan University · Computer Science & Electronic Engineering</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.1rem] font-bold leading-[1.04] max-w-3xl">
              <span className="gradient-heading">Rokaya Akter</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Building secure and scalable intelligent systems for distributed networks, privacy-preserving collaboration, and trustworthy AI applications.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">Federated Learning</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">Cybersecurity</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">IoT</span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">NLP</span>
            </div>

            <motion.div
              className="grid grid-cols-3 gap-3 mt-8 max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card/85 backdrop-blur-sm px-4 py-3 text-center"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                >
                  <p className="font-display text-xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wide">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#research"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition"
              >
                Explore Research
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="#publications"
                className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur-sm text-foreground px-5 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition"
              >
                <FileText className="w-4 h-4" />
                Publications
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-border bg-card/85 backdrop-blur-md p-6 md:p-7 shadow-[0_18px_50px_hsl(var(--primary)/0.12)]"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="relative mb-6 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 p-5">
              <div className="relative flex items-center gap-4">
                <img
                  src={profileAvatar}
                  alt="Rokaya Akter"
                  className="w-20 h-20 rounded-2xl object-cover border border-accent/25 shadow-md"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Research Identity</p>
                  <p className="text-base font-semibold text-foreground mt-1">Rokaya Akter</p>
                  <p className="text-xs text-muted-foreground mt-1">M.Sc. Student, Computer Science & Electronic Engineering</p>
                  <p className="text-xs text-accent font-medium mt-1">Hunan University, China</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Research Focus</p>
                <p className="text-sm font-medium text-foreground mt-1">Federated Learning, Security & Privacy, IoT, and NLP</p>
              </div>

              <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Current Work</p>
                <p className="text-sm font-medium text-foreground mt-1">Fair client selection and encrypted aggregation for intrusion detection in resource-constrained networks</p>
              </div>

              <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Professional Objective</p>
                <p className="text-sm font-medium text-foreground mt-1">Advancing trustworthy, privacy-preserving AI through impactful academic research and collaborations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
