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
    contribution: "Combines fair client participation and encrypted aggregation to improve both security and practical deployment feasibility.",
    topics: ["Federated Learning", "Intrusion Detection", "Security", "Privacy"],
  },
  {
    id: "genai-sentinel-2025",
    title: "Generative AI–Guided Sentinel for Self-Optimizing Federated Cybersecurity and Intelligent Threat Detection",
    authors: "Akter, R., Rishat, M. A. S. A., Singh, S., Singh, A., & Naizheng, B.",
    venue: "Journal of Hunan University Natural Sciences, 52(12)",
    year: 2025,
    type: "journal",
    summary: "Introduces a generative-AI-guided framework for adaptive federated cybersecurity.",
    contribution: "Explores self-optimizing threat intelligence under distributed and privacy-aware settings.",
    topics: ["Generative AI", "Federated Cybersecurity", "Threat Detection"],
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
    contribution: "Demonstrates how MiDaS-based depth prediction can support safer and more precise surgical workflows.",
    topics: ["Healthcare AI", "Computer Vision", "Deep Learning"],
    doi: "10.1007/978-3-031-70687-5_5",
  },
];

const PaperDetailCard = ({ paper, index }: { paper: PaperDetail; index: number }) => (
  <motion.article
    className="border border-border rounded-xl p-6 md:p-7 bg-background hover:shadow-lg transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="mb-4">
      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
        {paper.type === "journal" ? "Journal Article" : "Conference Paper"} · {paper.year}
      </p>

      <h3 className="text-lg md:text-xl font-semibold text-foreground mt-1 leading-snug">{paper.title}</h3>
      <p className="text-xs text-muted-foreground mt-2">{paper.authors}</p>
      <p className="text-xs italic text-muted-foreground">{paper.venue}</p>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-xs font-semibold text-foreground mb-1">Summary</p>
        <p className="text-sm text-foreground/90 leading-relaxed">{paper.summary}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground mb-1">Key Contribution</p>
        <p className="text-sm text-foreground/90 leading-relaxed">{paper.contribution}</p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
      {paper.topics.map((topic) => (
        <span key={topic} className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground">
          {topic}
        </span>
      ))}
    </div>

    {paper.doi && (
      <a
        href={`https://doi.org/${paper.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
      >
        <ExternalLink className="w-3 h-3" />
        View Publication
      </a>
    )}
  </motion.article>
);

const PapersDetailSection = () => {
  const journals = papers.filter((p) => p.type === "journal");
  const conferences = papers.filter((p) => p.type === "conference");

  return (
    <section id="research" className="section-padding bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Research Papers</p>
          <h2 className="section-title">Featured Contributions</h2>
          <p className="section-desc">
            A focused selection of publications spanning federated learning, cybersecurity, NLP, and healthcare AI.
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
              Journal Articles ({journals.length})
            </h3>
            <div className="space-y-6">
              {journals.map((paper, i) => (
                <PaperDetailCard key={paper.id} paper={paper} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
              Conference Papers ({conferences.length})
            </h3>
            <div className="space-y-6">
              {conferences.map((paper, i) => (
                <PaperDetailCard key={paper.id} paper={paper} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PapersDetailSection;
