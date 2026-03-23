import { motion } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import profileAvatar from "@/assets/Rokaya Akter.jpg";

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
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
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
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-5 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition"
            >
              <FileText className="w-4 h-4" />
              Publications
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
