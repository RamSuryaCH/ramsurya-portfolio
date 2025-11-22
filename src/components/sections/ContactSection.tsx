"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Mail, Linkedin, Phone, Github, Instagram } from 'lucide-react';
import CenteredFeedbackDrawer from '@/components/ui/centered-feedback-drawer';

const avatarImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754841114012-3nxrhtwxsxf.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754841115007-7cwqvklqima.jpeg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1754841116232-409tfpjurcb.jpg",
];

// X (Twitter) Icon Component
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const ContactSection = () => {
  const { ref: containerRef, variants: containerVariants } = useScrollAnimation('fadeInUp', { 
    threshold: 0.3,
    staggerChildren: 0.2
  });

  const { ref: ctaRef, variants: ctaVariants } = useScrollAnimation('scale', { 
    threshold: 0.3,
    delay: 0.4 
  });

  return (
    <section id="contact" className="bg-background py-16 sm:py-24 md:py-32">
      <motion.div 
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold tracking-tighter leading-tight max-w-5xl mx-auto text-foreground">
          Let's connect and build something amazing together
        </h2>

        <div className="flex justify-center items-center mt-6 sm:mt-8 mb-8 sm:mb-10">
          <div className="flex -space-x-2 sm:-space-x-3">
            {avatarImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Community member ${index + 1}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-background object-cover w-8 h-8 sm:w-10 sm:h-10"
              />
            ))}
          </div>
          <p className="ml-3 sm:ml-4 text-xs sm:text-sm text-muted-foreground">Join the growing network</p>
        </div>

        {/* Contact Drawer Button */}
        <motion.div
          className="flex justify-center mb-12 sm:mb-16"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <CenteredFeedbackDrawer />
        </motion.div>

        <motion.div
          ref={ctaRef}
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12 max-w-6xl mx-auto"
        >
          <Link 
            href="mailto:ramsurya.chelluboyina@gmail.com" 
            className="flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-lg px-4 sm:px-6 h-12 sm:h-12 text-sm sm:text-base font-medium transition-transform duration-300 ease-in-out hover:scale-[1.02] min-h-[44px] touch-manipulation col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">Send Email</span>
            <span className="xs:hidden">Email</span>
          </Link>
          
          <Link 
            href="https://www.linkedin.com/in/ram-surya-chelluboyina"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent-orange text-white hover:bg-orange-600 rounded-lg px-4 sm:px-6 h-12 sm:h-12 text-sm sm:text-base font-medium transition-transform duration-300 ease-in-out hover:scale-[1.02] min-h-[44px] touch-manipulation"
          >
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">LinkedIn</span>
            <span className="xs:hidden">In</span>
          </Link>

          <Link 
            href="https://github.com/RamSuryaCH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80 rounded-lg px-4 sm:px-6 h-12 sm:h-12 text-sm sm:text-base font-medium transition-transform duration-300 ease-in-out hover:scale-[1.02] min-h-[44px] touch-manipulation"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>GitHub</span>
          </Link>

          <Link 
            href="https://x.com/RamSuryaCH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80 rounded-lg px-4 sm:px-6 h-12 sm:h-12 text-sm sm:text-base font-medium transition-transform duration-300 ease-in-out hover:scale-[1.02] min-h-[44px] touch-manipulation"
          >
            <XIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">Follow on X</span>
            <span className="xs:hidden">X</span>
          </Link>

          <Link 
            href="https://www.instagram.com/ram.surya_ch/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 rounded-lg px-4 sm:px-6 h-12 sm:h-12 text-sm sm:text-base font-medium transition-transform duration-300 ease-in-out hover:scale-[1.02] min-h-[44px] touch-manipulation"
          >
            <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Instagram</span>
          </Link>
        </motion.div>

        <div className="max-w-md mx-auto text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">7382424818</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm break-all">ramsurya.chelluboyina@gmail.com</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            📍 Hyderabad, Telangana, India
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;