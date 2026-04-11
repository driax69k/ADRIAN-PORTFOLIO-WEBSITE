import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import Apfp from '../assets/Apfp.jpg';


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR FREELANCE
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-6">
            Hi I'm Adrian <br />
            <span className="text-gradient">FRONT-END DEVELOPER</span>
          </h1>

          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            A first year BSIT student who is passionate about building modern and responsive web interfaces. Focused on clean code, interactivity, and creating seamless user experiences through front-end development.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-bg-dark font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>

        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 aspect-square w-full max-w-md mx-auto glass rounded-3xl overflow-hidden group"
          >
            <img
              src={Apfp}
              alt="Adrian PFP"
              className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass rounded-2xl flex items-center justify-center rotate-12 z-20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest">Months Exp.</div>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-full flex items-center justify-center -rotate-12 z-20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">3</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest">Projects</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
