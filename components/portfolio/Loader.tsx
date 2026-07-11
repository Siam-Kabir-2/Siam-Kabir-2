"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary"
            >
              Loading
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-5xl font-light italic tracking-[-0.02em] text-gradient"
            >
              SK
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
