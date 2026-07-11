"use client";

import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/lib/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
