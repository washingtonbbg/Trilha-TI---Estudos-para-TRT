import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trilha TI · Seu estudo começa aqui",
  description: "Estude TI desde o início com questões comentadas, revisões e progresso sincronizado.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
