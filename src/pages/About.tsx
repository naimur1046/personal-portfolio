import { motion } from "framer-motion";
import ResearchAndDevelopment from "../assets/research-and-development.png";
import Development from "../assets/development.png";
import CompetitiveProgramming from "../assets/competitive-programming.png";
import Institute from "../assets/institute.png";
import EventOrganized from "../assets/project-management.png";
import Project from "../assets/project-idea.png";
import ML from "../assets/ml.png";
import ReadingBook from "../assets/reading-book.png";
import DebateSpeech from "../assets/debate-speech.png";

const aboutItems = [
  {
    img: Development,
    text: "I was a Trainee Software Engineer at OnnoRokom Projukti Limited in the Software Development team.",
  },
  {
    img: ResearchAndDevelopment,
    text: "I worked in the Research & Development team at OnnoRokom Projukti Limited.",
  },
  {
    img: CompetitiveProgramming,
    text: "I have solved about 1500 problems on various online judges.",
  },
  {
    img: Institute,
    text: "Student of Software Engineering, SUST.",
  },
  {
    img: EventOrganized,
    text: "I have organized 40+ events.",
  },
  {
    img: Project,
    text: "Completed many projects in industries and university.",
  },
  {
    img: ML,
    text: "Passionate about Machine Learning and NLP. Currently working on a research paper on Sentiment Analysis.",
  },
  {
    img: ReadingBook,
    text: "Passionate about reading books—exploring different worlds, gaining new perspectives, and continuously learning.",
  },
  {
    img: DebateSpeech,
    text: "Experienced in public speaking and debate confidence, engaging audiences, and mastering the art of persuasion.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#111827] to-[#0c1220] py-20 px-6">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {aboutItems.map((about, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03, y: -6 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg bg-gradient-to-r from-cyan-500 to-purple-600" />

            {/* Card */}
            <div className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col items-center h-full">
              {/* Icon container */}
              <div className="w-20 h-20 rounded-xl bg-white/[0.08] border border-white/10 flex items-center justify-center mb-5">
                <img src={about.img} alt="About Icon" className="w-12 h-12" />
              </div>

              {/* Text */}
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {about.text}
              </p>

              {/* Bottom accent bar */}
              <div className="mt-auto pt-5 w-full">
                <div className="h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500 bg-gradient-to-r from-cyan-500 to-purple-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
