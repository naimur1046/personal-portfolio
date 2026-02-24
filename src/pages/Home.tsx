import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RumelPhoto from "../assets/rumel.png";
import { socialLinks } from "../constants/socialLinks";

const roles = ["Software Engineer", "AI Researcher", "Community Leader"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.slice(0, text.length - 1)
          : currentRole.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full min-h-screen flex items-center bg-gradient-to-br from-[#0a0f1a] via-[#0c1220] to-[#111827]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.p variants={item} className="text-cyan-400 text-lg font-medium mb-2">
              Hello, I'm
            </motion.p>

            <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Naimur Rahman Rumel
            </motion.h1>

            <motion.div variants={item} className="mb-6">
              <span className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="text-2xl md:text-3xl font-semibold text-cyan-400 animate-pulse">|</span>
            </motion.div>

            <motion.p variants={item} className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I am a Software Engineer at Surbana Jurong, passionate about AI,
              problem-solving, product planning, event handling, and development. With a strong foundation
              in software engineering, I continuously explore new technologies to drive innovation and impactful results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/drive/folders/1qZQtdmRlar6E0iSr1UnqutANnFNYo1lP?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Gradient glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 opacity-60 blur-lg" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={RumelPhoto}
                  alt="Naimur Rahman Rumel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
