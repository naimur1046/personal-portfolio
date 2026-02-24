import { FaGithub, FaLinkedinIn, FaFacebookF, FaMediumM } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/naimur1046", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/naimur-rahman-rumel", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/naimurrumel", label: "Facebook" },
  { icon: FaMediumM, href: "https://medium.com/@naimurrahman1046", label: "Medium" },
];
