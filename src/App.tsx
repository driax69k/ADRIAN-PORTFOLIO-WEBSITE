/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Adrian Cordero | UI/UX Designer Portfolio</title>
        <meta name="description" content="Portfolio of a creative full-stack developer specializing in high-end digital experiences." />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-bg-dark selection:bg-primary/30"
          >
            <CustomCursor />
            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            <Footer />

            {/* Background elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-40" />
              <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
              <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}
