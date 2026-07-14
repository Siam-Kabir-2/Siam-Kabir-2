"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ThemeProvider } from "@/lib/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScroll>
        {children}
        <Toaster position="top-right" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
