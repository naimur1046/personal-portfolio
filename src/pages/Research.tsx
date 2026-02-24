import { motion } from "framer-motion";

interface Paper {
  title: string;
  abstract: string;
  venue: string;
  role: string;
  tags: string[];
  link: string;
}

const papers: Paper[] = [
  {
    title:
      "Gradient Masters at BLP-2025 Task 1: Advancing Low-Resource NLP for Bengali using Ensemble-Based Adversarial Training for Hate Speech Detection",
    abstract:
      'This paper introduces the approach of "Gradient Masters" for BLP-2025 Task 1: "Bangla Multitask Hate Speech Identification Shared Task". We present an ensemble-based fine-tuning strategy for addressing subtasks 1A (hate-type classification) and 1B (target group classification) in YouTube comments. We propose a hybrid approach on a Bangla Language Model, which outperformed the baseline models and secured the 6th position in subtask 1A with a micro F1 score of 73.23% and the third position in subtask 1B with 73.28%.',
    venue: "ACL Anthology — BLP 2025",
    role: "2nd Author",
    tags: ["NLP", "Hate Speech Detection", "Bengali", "Ensemble Learning", "Low-Resource"],
    link: "https://aclanthology.org/2025.banglalp-1.34/",
  },
  {
    title:
      "WoNBias: A Dataset for Classifying Bias & Prejudice Against Women in Bengali Text",
    abstract:
      "This paper presents WoNBias, a curated Bengali dataset to identify gender-based biases, stereotypes, and harmful language directed at women. It merges digital sources — social media, blogs, news — with offline tactics comprising surveys and focus groups, alongside some existing corpora to compile a total of 31,484 entries (10,656 negative; 10,170 positive; 10,658 neutral). WoNBias reflects the sociocultural subtleties of bias in both Bengali digital and offline conversations.",
    venue: "ACL Anthology",
    role: "4th Author",
    tags: ["NLP", "Gender Bias", "Bengali", "Dataset", "Content Moderation"],
    link: "https://aclanthology.org/2025.gebnlp-1.10/",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotateX: 8,
    transition: { delay: i * 0.2 },
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Research = () => {
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-16 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Research &{" "}
          <span className="bg-gradient-to-r from-[#f7971e] to-[#ffd200] bg-clip-text text-transparent">
            Publications
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Contributing to the advancement of Natural Language Processing for
          low-resource languages, with publications in top-tier venues.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20">
            ACL Anthology
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20">
            Bengali NLP
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20">
            Low-Resource Languages
          </span>
        </div>
      </motion.div>

      {/* Papers */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {papers.map((paper, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative group"
          >
            {/* Animated gradient border glow */}
            <motion.div
              className="absolute -inset-[2px] rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
              animate={{
                background: [
                  "linear-gradient(135deg, #f7971e, #ffd200, #f7971e)",
                  "linear-gradient(135deg, #ffd200, #f7971e, #ffd200)",
                  "linear-gradient(135deg, #f7971e, #ffd200, #f7971e)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Card */}
            <div className="relative bg-[#1a1a2e]/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
              {/* Paper number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#f7971e] to-[#ffd200] flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="text-[#1a1a2e] font-bold text-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Venue & Role badges */}
              <div className="flex flex-wrap gap-3 mb-5 ml-6">
                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#f7971e]/20 to-[#ffd200]/20 text-[#ffd200] text-sm font-medium border border-[#ffd200]/30">
                  {paper.venue}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 text-sm font-medium border border-emerald-500/30">
                  {paper.role}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {paper.title}
              </h2>

              {/* Abstract */}
              <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                {paper.abstract}
              </p>

              {/* Tags & Link */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#f7971e] to-[#ffd200] text-[#1a1a2e] font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                >
                  Read Paper
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-400 text-sm">
            More research in progress...
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Research;
