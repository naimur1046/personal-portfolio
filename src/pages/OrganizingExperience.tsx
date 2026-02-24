import { motion } from "framer-motion";

interface Experience {
  title: string;
  role: string;
  description: string;
  icon: string;
  accent: string;
}

const experiences: Experience[] = [
  {
    title: "Noakhali Association, SUST",
    role: "Co-Convenor & Founder",
    description:
      "In the absence of a dedicated organization for Noakhali students at SUST, we took the initiative to establish the Noakhali Association, SUST. Throughout this journey, we encountered various challenges but remained committed to our vision...",
    icon: "🚀",
    accent: "#06b6d4",
  },
  {
    title: "Noakhali Association, SUST",
    role: "President",
    description:
      "I currently serve as the President of Noakhali Association, SUST, an organization with over 100 active members. During my tenure, I have successfully organized seven programs, engaging students, faculty members, and others...",
    icon: "👑",
    accent: "#f59e0b",
  },
  {
    title: "Fusion Students Association, Subarnachar",
    role: "General Secretary",
    description:
      "I currently serve as the General Secretary of Fusion Students Association, Subarnachar, a platform for public university students from my homeland. This organization is dedicated to raising awareness and supporting education...",
    icon: "🤝",
    accent: "#10b981",
  },
  {
    title: "Ongikar, SUST",
    role: "Ex. General Secretary",
    description:
      "I served as the General Secretary of Ongikar, a cultural organization at SUST. During my tenure, I worked to promote cultural growth and participated in poetry recitation events and cultural programs...",
    icon: "🎭",
    accent: "#a855f7",
  },
];

const OrganizingExperience = () => {
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
          Organizing{" "}
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
            Experience
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          Leadership roles that shaped my journey in community building and event management.
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
                      style={{ backgroundColor: exp.accent, boxShadow: `0 0 20px ${exp.accent}50` }}
                    >
                      {exp.icon}
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
                      style={{ backgroundColor: exp.accent, boxShadow: `0 0 20px ${exp.accent}50` }}
                    >
                      {exp.icon}
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

const Card = ({ exp }: { exp: Experience }) => (
  <div className="relative group">
    {/* Glow behind card */}
    <div
      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-md"
      style={{ background: `linear-gradient(135deg, ${exp.accent}, transparent, ${exp.accent})` }}
    />

    {/* Card body */}
    <div className="relative bg-white/[0.05] backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
      {/* Role badge */}
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
        style={{
          color: exp.accent,
          borderColor: `${exp.accent}40`,
          backgroundColor: `${exp.accent}15`,
        }}
      >
        {exp.role}
      </span>

      {/* Title */}
      <h2 className="text-xl font-bold text-white mb-3 leading-snug">
        {exp.title}
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed text-justify">
        {exp.description}
      </p>

      {/* Bottom accent bar */}
      <div
        className="mt-5 h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
        style={{ backgroundColor: exp.accent }}
      />
    </div>
  </div>
);

export default OrganizingExperience;
