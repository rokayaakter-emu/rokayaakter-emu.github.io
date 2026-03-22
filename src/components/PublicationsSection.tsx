import { motion } from "framer-motion";

type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: number;
  type: "journal" | "conference";
  doi?: string;
};

const publications: Publication[] = [
  {
    authors: "Akter, R., Naizheng, B., Ullah, I., Singh, S., Singh, A., & Iqbal, M.",
    title: "Fair client selection and encrypted aggregation: a federated learning framework for intrusion detection in resource-constrained networks",
    venue: "Cluster Computing, 29(3), 164",
    year: 2026,
    type: "journal",
  },
  {
    authors: "Akter, R., Rishat, M. A. S. A., Singh, S., Singh, A., & Naizheng, B.",
    title: "Generative AI–Guided Sentinel for Self-Optimizing Federated Cybersecurity and Intelligent Threat Detection",
    venue: "Journal of Hunan University Natural Sciences, 52(12)",
    year: 2025,
    type: "journal",
  },
  {
    authors: "Rokaya, A., Islam, S. M. T., Zhang, H., Sun, L., Zhu, M., & Zhao, L.",
    title: "Acceptance of chatbot based on emotional intelligence through machine learning algorithm",
    venue: "2022 2nd International Conference on Frontiers of Electronics, Information and Computation Technologies (ICFEICT), IEEE, pp. 610–616",
    year: 2022,
    type: "conference",
    doi: "10.1109/ICFEICT57213.2022.00111",
  },
  {
    authors: "Rokaya, A., Islam, S. M. T., & Mostafa, K.",
    title: "Enhancing surgical precision: Deep learning-based depth estimation in minimally invasive surgery with the MiDaS model",
    venue: "International Conference on Robot Intelligence Technology and Applications, Springer, pp. 46–57",
    year: 2023,
    type: "conference",
    doi: "10.1007/978-3-031-70687-5_5",
  },
  {
    authors: "Singh, S., Akter, R., Sultana, T., Liu, P., & Lu, X.",
    title: "Generative Models for Personalized Federated Learning via Class-Separable Latent Spaces and Meta-Adaptation",
    venue: "Journal of Hunan University Natural Sciences, 52(11)",
    year: 2025,
    type: "journal",
  },
  {
    authors: "Quadir, B., Mostafa, K., Yang, J. C., Shen, J., & Akter, R.",
    title: "ARCS approach to PTA-based programming language practice sessions: Factors influencing Programming Problem-Solving Skills",
    venue: "Education and Information Technologies, 28(10), 13713–13735",
    year: 2023,
    type: "journal",
    doi: "10.1007/s10639-023-11740-6",
  },
  {
    authors: "Chunxiao, L., Akter, R., Meijia, T., Kexin, W., Jiao, W., & Xin, Z.",
    title: "Research status and development suggestions of hawthorn pitting machine in China",
    venue: "Scientific Journal of Intelligent Systems Research",
    year: 2022,
    type: "conference",
  },
];

const renderPub = (pub: Publication, i: number) => (
  <motion.li
    key={`${pub.title}-${pub.year}`}
    className="pl-5 py-4 border-l border-border hover:border-accent transition-all"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: i * 0.04 }}
  >
    <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">{pub.title}</p>

    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{pub.authors}</p>

    <p className="text-xs text-muted-foreground mt-1">
      <span className="italic">{pub.venue}</span>, {pub.year}
    </p>

    {pub.doi && (
      <a
        href={`https://doi.org/${pub.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-accent hover:underline mt-2 inline-block"
      >
        View Paper →
      </a>
    )}
  </motion.li>
);

const PublicationsSection = () => {
  const journals = publications.filter((item) => item.type === "journal");
  const conferences = publications.filter((item) => item.type === "conference");

  return (
    <section id="publications" className="section-padding max-w-5xl mx-auto">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">Publications</p>
        <h2 className="section-title">Publication List</h2>
        <p className="section-desc max-w-2xl">
          Selected peer-reviewed publications in federated learning, AI, cybersecurity, NLP, and applied intelligent systems.
        </p>
      </motion.div>

      <div className="space-y-12">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Journal Articles
          </h3>
          <ul className="space-y-3">{journals.map(renderPub)}</ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
            Conference Proceedings
          </h3>
          <ul className="space-y-3">{conferences.map(renderPub)}</ul>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
