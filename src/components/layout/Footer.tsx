"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const OsmoAsteriskIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 26 26" fill="currentColor" {...props}>
    <g transform="translate(13, 13)">
      <rect width="2.5" height="26" x="-1.25" y="-13" />
      <rect width="2.5" height="26" x="-1.25" y="-13" transform="rotate(45)" />
      <rect width="2.5" height="26" x="-1.25" y="-13" transform="rotate(90)" />
      <rect width="2.5" height="26" x="-1.25" y="-13" transform="rotate(135)" />
    </g>
  </svg>
);

// X (Twitter) Icon Component
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const sitemapLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "https://www.linkedin.com/in/ram-surya-chelluboyina", label: "LinkedIn Profile" },
  { href: "https://github.com/RamSuryaCH", label: "GitHub" },
  { href: "https://x.com/RamSuryaCH", label: "X (Twitter)" },
  { href: "https://www.instagram.com/ram.surya_ch/", label: "Instagram" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/ram-surya-chelluboyina", label: "LinkedIn" },
  { href: "https://github.com/RamSuryaCH", label: "GitHub" },
  { href: "https://x.com/RamSuryaCH", label: "X" },
  { href: "https://www.instagram.com/ram.surya_ch/", label: "Instagram" },
];

const FooterLinkColumn = ({ title, links, index }: { 
  title: string; 
  links: Array<{ href: string; label: string; count?: number }>; 
  index: number;
}) => {
  const { ref, variants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.2,
    delay: index * 0.1 
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 sm:mb-5">{title}</h3>
      <ul className="space-y-2 sm:space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm sm:text-base text-foreground hover:opacity-70 transition-opacity flex items-center min-h-[44px] py-1 touch-manipulation">
              {link.label}
              {link.count && (
                <span className="ml-1.5 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {link.count}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

function NewsletterForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const { ref, variants } = useScrollAnimation('fadeInRight', { 
    threshold: 0.2,
    delay: 0.4 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", { firstName, email });
  };

  return (
    <motion.form 
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit} 
      className="space-y-3 sm:space-y-4"
    >
      <Input
        type="text"
        placeholder="Your name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full rounded-md bg-muted px-4 py-4 sm:py-5 font-sans text-sm sm:text-base text-foreground placeholder:text-muted-foreground border-none ring-offset-background focus-visible:ring-2 focus-visible:ring-muted-foreground focus-visible:ring-offset-2 h-auto min-h-[44px]"
        aria-label="Your name"
      />
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Input
          type="email"
          placeholder="your.email@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow rounded-md bg-muted px-4 py-4 sm:py-5 font-sans text-sm sm:text-base text-foreground placeholder:text-muted-foreground border-none ring-offset-background focus-visible:ring-2 focus-visible:ring-muted-foreground focus-visible:ring-offset-2 h-auto min-h-[44px]"
          aria-label="Email address"
        />
        <Button 
          type="submit"
          className="w-full shrink-0 sm:w-auto rounded-md bg-muted px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base font-medium text-foreground hover:bg-muted/80 transition-colors h-auto min-h-[44px] touch-manipulation"
        >
          Connect
        </Button>
      </div>
    </motion.form>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-background text-foreground overflow-hidden border-t border-border/15">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8">
          <div className="col-span-1">
            <FooterLinkColumn title="Navigation" links={sitemapLinks} index={0} />
          </div>
          <div className="col-span-1">
            <FooterLinkColumn title="Connect" links={resourceLinks} index={1} />
          </div>
          
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 sm:mb-5">Get In Touch</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Let's connect and explore opportunities together.</p>
            <NewsletterForm />
          </div>
        </div>

      </div>
      
      <div className="relative">
        <div className="absolute bottom-0 inset-x-0 h-full z-0 pointer-events-none">
          <div className="container mx-auto h-full relative">
            <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-8 left-0 text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13vw] xl:text-[180px] font-bold text-muted/[0.04] whitespace-nowrap">
              <span className="hidden xs:inline">Ram Surya</span>
              <span className="xs:hidden">RS</span>
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-8 right-0 text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13vw] xl:text-[180px] text-muted/[0.04]">
              <OsmoAsteriskIcon className="size-full" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-xs text-muted-foreground gap-4 sm:gap-6">
              <p className="order-2 sm:order-1">©{new Date().getFullYear()} RAM SURYA CHELLUBOYINA. ALL RIGHTS RESERVED.</p>
              
              <div className="flex flex-wrap justify-center sm:justify-end gap-x-3 sm:gap-x-4 gap-y-2 order-1 sm:order-2">
                {socialLinks.map(link => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors min-h-[44px] py-2 touch-manipulation flex items-center">{link.label.toUpperCase()}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}