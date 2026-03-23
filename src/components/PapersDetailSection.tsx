import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PaperDetail {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference";
  summary: string;
  contribution: string;
  topics: string[];
  doi?: string;
  link?: string;
}

const papers: PaperDetail[] = [
  {
    id: "fl-ids-2026",
    title: "Fair client selection and encrypted aggregation: a federated learning framework for intrusion detection in resource-constrained networks",
    authors: "Akter, R., Naizheng, B., Ullah, I., Singh, S., Singh, A., & Iqbal, M.",
    venue: "Cluster Computing, 29(3), 164",
    year: 2026,
    type: "journal",
    summary: "Proposes a federated intrusion-detection framework tailored for resource-constrained environments.",
    contribution: "Combines fair client participation and encrypted aggregation to improve both security and deployment feasibility.",
    topics: ["Federated Learning", "Intrusion Detection", "Security", "Privacy"],
    link: "https://link.springer.com/article/10.1007/s10586-025-05905-w",
  },
  {
    id: "genai-sentinel-2025",
    title: "Generative AI–Guided Sentinel for Self-Optimizing Federated Cybersecurity and Intelligent Threat Detection",
    authors: "Akter, R., Rishat, M. A. S. A., Singh, S., Singh, A., & Naizheng, B.",
    venue: "Journal of Hunan University Natural Sciences, 52(12)",
    year: 2025,
    type: "journal",
    summary: "Introduces a generative-AI-guided framework for adaptive federated cybersecurity.",
    contribution: "Explores self-optimizing threat intelligence under distributed privacy-aware settings.",
    topics: ["Generative AI", "Federated Cybersecurity", "Threat Detection"],
    link: "https://doi.org/10.55463/issn.1674-2974.52.12.1",
  },
  {
    id: "chatbot-ei-2022",
    title: "Acceptance of chatbot based on emotional intelligence through machine learning algorithm",
    authors: "Rokaya, A., Islam, S. M. T., Zhang, H., Sun, L., Zhu, M., & Zhao, L.",
    venue: "ICFEICT 2022, IEEE, pp. 610–616",
    year: 2022,
    type: "conference",
    summary: "Studies user acceptance of emotionally intelligent chatbots through machine learning analysis.",
    contribution: "Connects affect-aware interaction design with data-driven adoption patterns.",
    topics: ["NLP", "Chatbots", "Emotional Intelligence", "Machine Learning"],
    doi: "10.1109/ICFEICT57213.2022.00111",
  },
  {
    id: "surgical-depth-2023",
    title: "Enhancing surgical precision: Deep learning-based depth estimation in minimally invasive surgery with the MiDaS model",
    authors: "Rokaya, A., Islam, S. M. T., & Mostafa, K.",
    venue: "International Conference on Robot Intelligence Technology and Applications, Springer",
    year: 2023,
    type: "conference",
    summary: "Applies deep learning depth estimation to improve perception in minimally invasive surgery.",
    contribution: "Shows how MiDaS-based depth prediction can support safer and more precise surgical workflows.",
    topics: ["Healthcare AI", "Computer Vision", "Deep Learning"],
    doi: "10.1007/978-3-031-70687-5_5",
  },
];

const getPaperLink = (paper: PaperDetail) =>
  paper.link
    ? paper.link
    : paper.doi
    ? `https://doi.org/${paper.doi}`
    : `https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}`;

const PaperDetailCard = ({ paper, index }: { paper: PaperDetail; index: number }) => (
  <motion.article
    className="elevated-card shimmer-border rounded-2xl p-5 md:p-6 tilt-hover bg-card/90 backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center justify-between gap-3 mb-3">
      <span
        className={`text-[10px] px-2.5 py-1 rounded-full font-medium uppercase tracking-wide ${
          paper.type === "journal" ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"
        }`}
      >
        {paper.type === "journal" ? "Journal" : "Conference"}
      </span>
      <span className="text-xs text-muted-foreground">{paper.year}</span>
    </div>

    <a
      href={getPaperLink(paper)}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base md:text-lg font-semibold text-foreground leading-snug min-h-[3.6rem] hover:text-accent transition-colors block"
    >
      {paper.title}
    </a>
    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{paper.authors}</p>
    <p className="text-xs italic text-muted-foreground mt-1">{paper.venue}</p>

    <div className="grid gap-3 mt-4 pt-4 border-t border-border">
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-1">Summary</p>
        <p className="text-sm text-foreground/90 leading-relaxed">{paper.summary}</p>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-1">Contribution</p>
        <p className="text-sm text-foreground/90 leading-relaxed">{paper.contribution}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-4">
      {paper.topics.map((topic) => (
        <span key={topic} className="text-[10px] px-2 py-1 rounded-md bg-secondary text-muted-foreground">
          {topic}
        </span>
      ))}
    </div>

    <a
      href={getPaperLink(paper)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-accent hover:underline"
    >
      <ExternalLink className="w-3.5 h-3.5" />
      View Publication
    </a>
  </motion.article>
);

const PapersDetailSection = () => {
  const journals = papers.filter((p) => p.type === "journal");
  const conferences = papers.filter((p) => p.type === "conference");

  return (
    <section id="research" className="section-padding bg-section-alt relative overflow-hidden research-grid-bg">
      <div className="aurora-bg">
        <div className="aurora-orb w-80 h-80 -left-12 top-16 bg-primary/30" style={{ animationDelay: "0.8s" }} />
        <div className="aurora-orb w-72 h-72 -right-10 bottom-4 bg-accent/35" style={{ animationDelay: "1.6s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="section-label">Research Papers</p>
          <h2 className="section-title gradient-heading">Featured Contributions</h2>
          <p className="section-desc max-w-3xl mb-0">
            A refined, publication-centric view with clear hierarchy, balanced spacing, and modern motion details.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl font-semibold text-foreground">Journal Articles</h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent">{journals.length} papers</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {journals.map((paper, index) => (
                <PaperDetailCard key={paper.id} paper={paper} index={index} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl font-semibold text-foreground">Conference Papers</h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{conferences.length} papers</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {conferences.map((paper, index) => (
                <PaperDetailCard key={paper.id} paper={paper} index={index + journals.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PapersDetailSection;
