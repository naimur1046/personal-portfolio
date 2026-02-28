import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

interface BlogPost {
  title: string;
  description: string;
  link: string;
  tags: string[];
  accent: string;
  icon: React.ReactNode;
  date: string;
}

const DataStoreIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <ellipse cx="35" cy="22" rx="18" ry="8" fill="#06b6d420" stroke="#06b6d4" strokeWidth="1.5" />
    <rect x="17" y="22" width="36" height="16" fill="#06b6d410" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="0 36 36 0" />
    <ellipse cx="35" cy="38" rx="18" ry="8" fill="#06b6d420" stroke="#06b6d4" strokeWidth="1.5" />
    <ellipse cx="85" cy="22" rx="18" ry="8" fill="#a855f720" stroke="#a855f7" strokeWidth="1.5" />
    <rect x="67" y="22" width="36" height="16" fill="#a855f710" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="0 36 36 0" />
    <ellipse cx="85" cy="38" rx="18" ry="8" fill="#a855f720" stroke="#a855f7" strokeWidth="1.5" />
    <path d="M53 30 L67 30" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3">
      <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1s" repeatCount="indefinite" />
    </path>
    <circle cx="35" cy="60" r="6" fill="#06b6d415" stroke="#06b6d4" strokeWidth="1" />
    <circle cx="60" cy="65" r="6" fill="#a855f715" stroke="#a855f7" strokeWidth="1" />
    <circle cx="85" cy="58" r="6" fill="#06b6d415" stroke="#06b6d4" strokeWidth="1" />
    <line x1="41" y1="60" x2="54" y2="65" stroke="#ffffff20" strokeWidth="1" />
    <line x1="66" y1="65" x2="79" y2="58" stroke="#ffffff20" strokeWidth="1" />
  </svg>
);

const MiddlewareIcon = () => (
  <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
    <rect x="8" y="15" width="24" height="50" rx="4" fill="#a855f715" stroke="#a855f7" strokeWidth="1.5" />
    <text x="20" y="43" textAnchor="middle" fill="#a855f7" fontSize="7" fontFamily="monospace">REQ</text>
    <rect x="48" y="20" width="24" height="40" rx="4" fill="#06b6d415" stroke="#06b6d4" strokeWidth="1.5" />
    <text x="60" y="43" textAnchor="middle" fill="#06b6d4" fontSize="6" fontFamily="monospace">MW</text>
    <rect x="88" y="15" width="24" height="50" rx="4" fill="#10b98115" stroke="#10b981" strokeWidth="1.5" />
    <text x="100" y="43" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">RES</text>
    <path d="M32 35 L48 35" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrowPurple)">
      <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
    </path>
    <path d="M72 35 L88 35" stroke="#06b6d4" strokeWidth="1.5" markerEnd="url(#arrowCyan)">
      <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.5s" repeatCount="indefinite" />
    </path>
    <path d="M88 45 L72 45" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M48 45 L32 45" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" />
    <defs>
      <marker id="arrowPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke="#a855f7" strokeWidth="1" />
      </marker>
      <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke="#06b6d4" strokeWidth="1" />
      </marker>
    </defs>
  </svg>
);

const blogs: BlogPost[] = [
  {
    title: "Choosing the Right Data Store for Modern Applications",
    description:
      "In today's data-driven world, storing and retrieving data efficiently is a critical part of application design. The way data is managed directly affects application performance, scalability, and user experience.",
    link: "https://medium.com/@naimurrahman1046/choosing-the-right-data-store-for-modern-applications-cf6be0e72722",
    tags: ["Database", "Architecture", "System Design"],
    accent: "#06b6d4",
    icon: <DataStoreIcon />,
    date: "2025",
  },
  {
    title: "Understanding Middleware in ASP.NET Core",
    description:
      "Middleware in ASP.NET Core processes every HTTP request and response through a pipeline. Each middleware can modify the request/response, call the next middleware, or stop execution early.",
    link: "https://medium.com/@naimurrahman1046/understanding-middleware-in-asp-net-core-655bc54b76f4",
    tags: ["ASP.NET Core", "Middleware", "Backend"],
    accent: "#a855f7",
    icon: <MiddlewareIcon />,
    date: "2025",
  },
];

const Blog = () => {
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-20 bg-gradient-to-br from-[#0a0f1a] via-[#0c1220] to-[#111827]">
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
            Blog
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Sharing insights on software architecture, backend development, and
          modern engineering practices.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative group cursor-pointer"
          >
            {/* Glow effect */}
            <div
              className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-lg"
              style={{
                background: `linear-gradient(135deg, ${blog.accent}, transparent, ${blog.accent})`,
              }}
            />

            {/* Card body */}
            <div className="relative h-full bg-white/[0.05] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300 flex flex-col">
              {/* Cover illustration */}
              <div
                className="h-44 w-full flex items-center justify-center p-6"
                style={{
                  background: `linear-gradient(135deg, ${blog.accent}10, ${blog.accent}05, transparent)`,
                }}
              >
                {blog.icon}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                      style={{
                        color: blog.accent,
                        borderColor: `${blog.accent}40`,
                        backgroundColor: `${blog.accent}15`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Read More */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span
                    className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
                    style={{ color: blog.accent }}
                  >
                    Read on Medium
                    <HiArrowUpRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs text-gray-600">{blog.date}</span>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ backgroundColor: blog.accent }}
              />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
