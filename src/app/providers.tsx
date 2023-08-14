"use client";

import { ButtonContextProvider } from "@/app/context/button";
import { Toaster } from "@/components/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ButtonContextProvider>
      <Toaster />
      {children}
    </ButtonContextProvider>
  );
}
