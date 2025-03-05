"use client";

import { createContext, FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const ThemeContext = createContext(undefined);

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
