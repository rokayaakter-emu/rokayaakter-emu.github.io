import { motion } from "framer-motion";
import { ArrowDown, Download, FileText, Github, GraduationCap, Linkedin } from "lucide-react";
import profileAvatar from "@/assets/Rokaya Akter.jpg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/rokaya-akter-emu/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://scholar.google.com/scholar?q=Rokaya+Akter",
    label: "Google Scholar",
    icon: GraduationCap,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: Github,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen border-b border-border overflow-hidden flex items-center justify-center">
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-16 sm:py-20 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto"
        >
          <div className="relative inline-flex items-center justify-center mb-6 sm:mb-7">
            <div className="absolute inset-0 rounded-full bg-accent/12 scale-110" />
            <img
              src={profileAvatar}
              alt="Rokaya Akter"
              className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full object-cover object-top border border-accent/25 shadow-[0_12px_28px_hsl(var(--primary)/0.14)]"
            />
          </div>

          <p className="text-accent font-semibold tracking-[0.18em] uppercase text-[11px] sm:text-xs mb-6">
            M.Sc. Student · Hunan University
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Rokaya Akter
          </h1>

          <p className="text-sm sm:text-base mt-3 font-semibold max-w-3xl mx-auto leading-relaxed text-accent/95">
            Machine Learning <span className="text-muted-foreground/70">·</span> Federated Learning <span className="text-muted-foreground/70">·</span> Cybersecurity <span className="text-muted-foreground/70">·</span> IoT Systems <span className="text-muted-foreground/70">·</span> Healthcare AI
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            Building secure and scalable intelligent systems for distributed networks, privacy-preserving collaboration, and trustworthy AI applications.
          </p>

          <motion.div
            className="relative mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className="pointer-events-none absolute inset-x-10 top-2 h-28 opacity-70">
              <svg viewBox="0 0 760 180" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
                <path d="M80 50 C180 130, 290 15, 380 92 C470 165, 575 35, 680 72" stroke="hsl(var(--accent) / 0.32)" strokeWidth="1.2" fill="none" />
                <path d="M110 24 C220 90, 330 18, 440 78 C545 134, 620 56, 720 42" stroke="hsl(var(--primary) / 0.28)" strokeWidth="1.1" fill="none" />
                <circle cx="80" cy="50" r="3" fill="hsl(var(--accent) / 0.8)" />
                <circle cx="222" cy="74" r="2.8" fill="hsl(var(--primary) / 0.75)" />
                <circle cx="380" cy="92" r="3.2" fill="hsl(var(--accent) / 0.85)" />
                <circle cx="522" cy="106" r="2.8" fill="hsl(var(--primary) / 0.72)" />
                <circle cx="680" cy="72" r="3" fill="hsl(var(--accent) / 0.8)" />
              </svg>
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-3 mb-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/65 px-4 py-2 text-xs sm:text-sm font-medium text-foreground/90 hover:border-accent/60 hover:text-foreground transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-3">
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
                className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-5 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition"
              >
                <FileText className="w-4 h-4" />
                Publications
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
