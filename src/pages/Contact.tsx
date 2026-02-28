import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiPhone, HiChat } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants/socialLinks";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const contactInfo = [
  { icon: HiMail, label: "Email", value: "naimurrahman1046@gmail.com" },
  { icon: HiPhone, label: "Mobile Number", value: "+8801788360952" },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#0c1220] via-[#111827] to-[#0a0f1a] py-20 px-6">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white">
          Get In{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/5 flex flex-col gap-6"
        >
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="flex items-center gap-4 bg-white/[0.05] backdrop-blur-sm rounded-xl p-5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                <info.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="mt-4">
            <p className="text-gray-500 text-sm mb-3">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col gap-5">
            <div className="relative">
              <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="user_name"
                required
                placeholder="Name"
                className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
              />
            </div>

            <div className="relative">
              <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
              />
            </div>

            <div className="relative">
              <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone"
                className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
              />
            </div>

            <div className="relative">
              <HiChat className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={5}
                className="w-full pl-12 pr-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between">
              {status === "sent" && (
                <p className="text-green-400 text-sm">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">Failed to send. Please try again.</p>
              )}
              {(status === "idle" || status === "sending") && <span />}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative self-end px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:hover:scale-100"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">{status === "sending" ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
