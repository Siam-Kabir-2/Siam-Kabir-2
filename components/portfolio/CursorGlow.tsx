"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[80] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
    >
      <div className="h-full w-full rounded-full bg-primary blur-3xl" />
    </motion.div>
  );
}
