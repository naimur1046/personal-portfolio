import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { HiBuildingOffice2, HiCodeBracket } from "react-icons/hi2";
import { HiExternalLink } from "react-icons/hi";

interface WorkExperience {
  role: string;
  company: string;
  companyUrl: string;
  duration: string;
  isCurrent?: boolean;
  description: string[];
  tech: string[];
  accent: string;
  icon: IconType;
}

const experiences: WorkExperience[] = [
  {
    role: "Software Engineer Level 01",
    company: "Surbana Jurong",
    companyUrl: "https://www.sjgroup.com/",
    duration: "Mar 2026 – Present",
    isCurrent: true,
    description: [
      "Developing and maintaining scalable enterprise software solutions for urban and infrastructure projects.",
      "Collaborating with cross-functional teams to design, implement, and deliver features aligned with business requirements.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", ".NET", "IOT"],
    accent: "#06b6d4",
    icon: HiBuildingOffice2,
  },
  {
    role: "Assistant Software Engineer → Software R&D Intern",
    company: "OnnoRokom Projukti Limited",
    companyUrl: "https://onnorokomprojukti.com/",
    duration: "Oct 2024 – Feb 2026",
    description: [
      "Built ICR — Interactive Classroom with live streaming via Google YouTube API, real-time hand-raise moderation, and scheduler system for automated meeting management.",
      "Developed a real-time private community chat application using WebSockets with React and ASP.NET.",
      "Created a meeting room booking system with cookie-based auth, FullCalendar integration, and QR code sharing.",
      "Implemented a face recognition-based attendance system using DeepFace, OpenCV, and Flask with anti-spoofing detection.",
    ],
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET",
      "PostgreSQL",
      "Redis",
      "Python",
      "OpenCV",
      "DeepFace",
      "PoastgreSQL",
    ],
    accent: "#a855f7",
    icon: HiCodeBracket,
  },
];

const ProfessionalExperience = () => {
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-20 bg-gradient-to-br from-[#0c1220] via-[#162032] to-[#1a1a2e]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold text-white">
          Professional{" "}
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          Building impactful software across enterprise and product teams.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical glowing line — desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px]">
          <div className="h-full w-full bg-gradient-to-b from-[#06b6d4] via-[#a855f7] to-[#06b6d4] opacity-40 rounded-full" />
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-6 top-0 h-full w-[3px]">
          <div className="h-full w-full bg-gradient-to-b from-[#06b6d4] via-[#a855f7] to-[#06b6d4] opacity-40 rounded-full" />
        </div>

        <div className="flex flex-col gap-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex w-full items-center">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-full items-center">
                  {/* Left side */}
                  <div className="w-1/2 flex justify-end pr-10">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="relative group w-full max-w-md"
                      >
                        <Card exp={exp} />
                      </motion.div>
                    )}
                  </div>

                  {/* Center dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-[3px] border-[#0c1220]"
                      style={{
                        backgroundColor: exp.accent,
                        boxShadow: `0 0 20px ${exp.accent}50`,
                      }}
                    >
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Right side */}
                  <div className="w-1/2 flex justify-start pl-10">
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="relative group w-full max-w-md"
                      >
                        <Card exp={exp} />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex w-full items-start">
                  {/* Dot on the left */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="z-10 flex-shrink-0"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg border-[3px] border-[#0c1220]"
                      style={{
                        backgroundColor: exp.accent,
                        boxShadow: `0 0 20px ${exp.accent}50`,
                      }}
                    >
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="ml-6 flex-1"
                  >
                    <Card exp={exp} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ exp }: { exp: WorkExperience }) => (
  <div className="relative group">
    {/* Glow behind card */}
    <div
      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"
      style={{
        background: `linear-gradient(135deg, ${exp.accent}, transparent, ${exp.accent})`,
      }}
    />

    {/* Card body */}
    <div className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
      {/* Duration + Present badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-500 text-xs font-medium">{exp.duration}</span>
        {exp.isCurrent && (
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              color: exp.accent,
              backgroundColor: `${exp.accent}15`,
              border: `1px solid ${exp.accent}40`,
            }}
          >
            Present
          </span>
        )}
      </div>

      {/* Role */}
      <h2 className="text-xl font-bold text-white mb-1 leading-snug">
        {exp.role}
      </h2>

      {/* Company link */}
      <a
        href={exp.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium mb-4 transition-colors hover:underline"
        style={{ color: exp.accent }}
      >
        {exp.company}
        <HiExternalLink className="w-3.5 h-3.5" />
      </a>

      {/* Description bullets */}
      <ul className="space-y-2 mb-5">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: exp.accent }}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {exp.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.06] text-gray-300 border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom accent bar */}
      <div
        className="mt-5 h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ backgroundColor: exp.accent }}
      />
    </div>
  </div>
);

export default ProfessionalExperience;
