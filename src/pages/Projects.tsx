import { motion } from "framer-motion";

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  accent: string;
  icon: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "ICR — Interactive Classroom",
    subtitle: "OnnoRokom Projukti Limited | Assistant Software Engineer",
    description: [
      "Integrated Google YouTube Live Streaming API to enable live class broadcasting with full stream lifecycle management.",
      "Developed a scheduler system to automatically remove expired or pre-scheduled meetings that were not launched.",
      "Designed a real-time Two-Way Communication & Moderation System (Hand Raise) enabling coordinators to grant/restrict voice, video, and screen-sharing permissions with stage-based access control.",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "ASP.NET", "Redis"],
    accent: "#06b6d4",
    icon: "🎓",
    category: "Professional",
    featured: true,
  },
  {
    title: "Open Community Platform",
    subtitle: "OnnoRokom Projukti Limited | Open Source Contributor",
    description: [
      "Contributed to requirement analysis, system design, and developed core features for a scalable, open-source community platform.",
      "Built Event Management module on the frontend and Donation Management on the backend.",
      "Followed Clean Architecture principles with robust API design using Minimal API pattern.",
    ],
    tech: [
      "React",
      "Redux",
      "Tailwind CSS",
      "ASP.NET",
      "PostgreSQL",
      "EF Core",
      "JWT",
      "Swagger",
    ],
    accent: "#a855f7",
    icon: "🌐",
    category: "Open Source",
    featured: true,
  },
  {
    title: "Private Community Chat Application",
    subtitle: "OnnoRokom Projukti Limited | Software R & D Intern",
    description: [
      "Developed a real-time chat application for seamless community interactions using WebSockets.",
      "Designed and implemented a responsive UI using React, TypeScript, and Tailwind CSS.",
      "Built the message controller for real-time communication in ASP.NET.",
    ],
    tech: [
      "ASP.NET",
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "WebSockets",
    ],
    accent: "#f59e0b",
    icon: "💬",
    category: "Professional",
  },
  {
    title: "Meeting Room Booking System",
    subtitle: "OnnoRokom Projukti Limited | Software Developer Intern",
    description: [
      "Built a system to streamline meeting room reservations with Admin and Client panels.",
      "Integrated secure cookie-based authentication and FullCalendar for interactive scheduling.",
      "Enabled booking information sharing via QR codes and unique links.",
    ],
    tech: [
      "ASP.NET Core MVC",
      "Razor Pages",
      "Bootstrap",
      "MSSQL",
      "FullCalendar",
    ],
    accent: "#10b981",
    icon: "📅",
    category: "Professional",
  },
  {
    title: "Face Attendance System",
    subtitle: "OnnoRokom Projukti Limited | Software R & D Intern",
    description: [
      "Implemented a real-time face recognition-based attendance system using CCTV camera streams.",
      "Integrated DeepFace for advanced facial recognition and anti-spoofing detection.",
      "Developed a secure backend using Flask and SQLite for attendance record storage.",
    ],
    tech: ["Python", "OpenCV", "DeepFace", "NumPy", "Flask", "SQLite"],
    accent: "#ef4444",
    icon: "🔍",
    category: "R & D",
  },
  {
    title: "Blood Bank Management System",
    subtitle: "Red Crescent Blood Bank, Sylhet | University Project",
    description: [
      "Developed a full-stack Blood Bank Management System in collaboration with the Red Crescent Society.",
      "Enabled users to find required blood, locate donors, and access contact information.",
      "Built admin panel to manage donor data, cross-matching, blood testing, and storage records.",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    accent: "#ec4899",
    icon: "🩸",
    category: "University",
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <div className="w-full mx-auto px-6 md:px-20 py-20 bg-gradient-to-br from-[#0c1220] via-[#162032] to-[#1a1a2e]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white">
          My{" "}
          <span className="bg-gradient-to-r from-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          A collection of professional, open-source, and personal projects
          showcasing my full-stack development expertise.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6 text-center"
        >
          Featured
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="relative group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6 text-center"
        >
          More Projects
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {regular.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
              className="relative group"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <>
    {/* Glow effect */}
    <div
      className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-lg"
      style={{
        background: `linear-gradient(135deg, ${project.accent}, transparent, ${project.accent})`,
      }}
    />

    {/* Card body */}
    <div className="relative h-full bg-white/[0.05] backdrop-blur-sm rounded-2xl p-7 border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {/* Category badge */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border"
            style={{
              color: project.accent,
              borderColor: `${project.accent}40`,
              backgroundColor: `${project.accent}15`,
            }}
          >
            {project.category}
          </span>

          {/* Title */}
          <h2 className="text-xl font-bold text-white leading-snug">
            {project.title}
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm mt-1">{project.subtitle}</p>
        </div>

        {/* Icon */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl ml-4 border"
          style={{
            borderColor: `${project.accent}30`,
            backgroundColor: `${project.accent}10`,
          }}
        >
          {project.icon}
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-2 mb-5 flex-1">
        {project.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: project.accent }}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {project.tech.map((t) => (
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
        style={{ backgroundColor: project.accent }}
      />
    </div>
  </>
);

export default Projects;
