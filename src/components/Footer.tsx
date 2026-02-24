import { socialLinks } from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Naimur Rahman Rumel. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#home"
          className="text-gray-500 text-sm hover:text-white transition-colors"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
};

export default Footer;
