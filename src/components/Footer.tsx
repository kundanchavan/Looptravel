import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Globe,
  Compass,
} from "lucide-react";
import { motion } from "motion/react";
import { FooterBackgroundGradient, TextHoverEffect } from "./ui/hover-footer";

export default function Footer() {
  const footerLinks = [
    {
      title: "Explorations",
      links: [
        { label: "Domestic Tours", href: "/packages" },
        { label: "International Tours", href: "/packages" },
        { label: "Adventure Tours", href: "#" },
        { label: "Honeymoon Specials", href: "#" },
      ],
    },
    {
      title: "The Company",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Travel Blog", href: "/blog" },
        { 
          label: "Live Concierge", 
          href: "#",
          pulse: true 
        },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-blue-500" />,
      text: "hello@looptravells.com",
      href: "mailto:hello@looptravells.com",
    },
    {
      icon: <Phone size={18} className="text-blue-500" />,
      text: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: <MapPin size={18} className="text-blue-500" />,
      text: "123 Adventure Lane, NYC",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Youtube size={20} />, label: "Youtube", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11] relative h-fit rounded-t-[3rem] overflow-hidden mt-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto p-14 z-40 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="text-blue-500 w-8 h-8" />
              <span className="text-white text-3xl font-bold tracking-tight">
                Loop<span className="text-blue-500">Travells</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting unforgettable journeys since 2012. We connect explorers with the soul of the planet.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-bold mb-6 tracking-tight">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label} className="relative flex items-center">
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="ml-2 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-gray-400">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-blue-500 transition-colors font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-medium">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-blue-500 transition-all hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Loop Travells. Designed for Dreamers.
          </p>
        </div>
      </motion.div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 relative z-10">
        <TextHoverEffect text="LOOP" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

