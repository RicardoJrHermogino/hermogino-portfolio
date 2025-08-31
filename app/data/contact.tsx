import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: null
  }
];

export const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://linkedin.com"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com"
  }
];