import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 border-t border-border relative overflow-hidden">
      <div className="aurora-bg">
        <div className="aurora-orb w-72 h-72 -left-24 top-6 bg-accent/22" />
        <div className="aurora-orb w-80 h-80 -right-28 bottom-0 bg-primary/20" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          className="elevated-card shimmer-border tilt-hover rounded-2xl p-6 sm:p-8 bg-card/90 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent uppercase tracking-widest text-xs mb-3">Contact</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Let’s Connect</h2>

          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Open to research collaboration in federated learning, cybersecurity, and privacy-preserving intelligent systems.
          </p>

          <a
            href="mailto:rokayaakteremu@hnu.edu.cn"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-sm"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>

          <div className="mt-6 space-y-1">
            <p className="text-xs text-muted-foreground/80">rokayaakteremu@hnu.edu.cn</p>
            <p className="text-xs text-muted-foreground/80">rokayaakteremu@gmail.com</p>
            <p className="text-xs text-muted-foreground/80">+86 15650326873</p>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="mailto:rokayaakteremu@hnu.edu.cn"
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a href="tel:+8615650326873" className="text-muted-foreground hover:text-foreground transition" aria-label="Phone">
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/rokaya-akter-emu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} Rokaya Akter. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
