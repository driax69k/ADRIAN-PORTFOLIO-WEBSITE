import { motion } from 'motion/react';

export default function Preloader() {
  const words = ["Creative", "Innovative", "UI/UX", "Portfolio", "Experience"];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-dark"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-display font-bold tracking-tighter text-white"
        >
          ADRIAN<span className="text-primary">.</span>
        </motion.div>

        <div className="h-8 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -32, -64, -96, -128],
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
              repeat: 0,
            }}
            className="flex flex-col items-center"
          >
            {words.map((word, i) => (
              <span key={i} className="h-8 text-xl font-mono text-white/50">
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-8 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </motion.div>
  );
}
