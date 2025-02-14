import { LogoSmall } from "@/svgs/logo-small";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Upgrade", href: "/dashboard" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];
  return (
    <section className="py-16 text-white/50 bg-black z-100">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6 mt-30">
          <div>
            <footer className="flex gap-6">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </footer>
          </div>
          <div className="w-20 h-20">
            <LogoSmall />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
