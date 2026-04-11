import React from 'react';
import { motion } from 'motion/react';
import { Github, Facebook, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
              Hi! I'm Adrian Cordero<span className="text-primary">.</span>
            </a>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              A creative Front-End Developer building responsive and engaging web experiences.
              Driven by clean code, user-focused design, and a passion for turning ideas into interactive interfaces.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Github size={20} />} href="https://github.com/driax69k" />
              <SocialLink icon={<Facebook size={20} />} href="https://www.facebook.com/adrian.cordero.332345" />
              <SocialLink icon={<Instagram size={20} />} href="https://www.instagram.com/aids.cordero/" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/60 uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#skills">Skills</FooterLink></li>
              <li><FooterLink href="#projects">Projects</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/60 uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-white/40 text-sm mb-6">Subscribe to get the latest updates and articles.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary w-full"
              />
              <button className="p-2 bg-primary text-bg-dark rounded-xl hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all">
                <ArrowUp className="rotate-90" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Adrian Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono text-white/30 uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
              <ArrowUp size={14} />
            </div>
          </button>

          <div className="flex gap-8 text-xs font-mono text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-display font-black text-white/[0.02] pointer-events-none whitespace-nowrap">
        ADRIAN PORTFOLIO
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.1 }}
      className="w-10 h-10 flex items-center justify-center rounded-xl glass hover:bg-primary/20 hover:text-primary transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-white/40 hover:text-primary transition-colors">
      {children}
    </a>
  );
}
