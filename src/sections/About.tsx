import { motion } from 'motion/react';
import aboutme from '../assets/aboutme.jpg';
export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass p-2">
              <img
                src={aboutme}
                alt="About Me"
                className="rounded-2xl w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Background blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              I build digital experiences while learning and growing <span className="text-secondary">every day</span>.
            </h3>

            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Hello! I'm a passionate Front-End Developer and a first-year BSIT student who's eager to learn and explore the world of web development. I enjoy creating interactive and visually appealing interfaces, and I love turning ideas into real projects with the help of AI.
              </p>
              <p>
                My approach is all about curiousity and creativity. I don't just build for the sake of it, I build to improve, experiment, and have fun along the way.
              </p>
              <p>
                When I'm not coding, I'm exploring new design trends, learning new tools, and working on projects that challenge my skills and expand my knowledge.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
