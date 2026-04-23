import type { Metadata } from "next";
import { Noto_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Blinds Depot | Cortinas, Persianas y Toldos",
  description:
    "Cortinas, persianas, toldos a medida, creados para el santuario moderno. Experimente precisión arquitectónica y elegancia atemporal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${notoSerif.variable} ${workSans.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen flex flex-col font-sans bg-background text-on-surface" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
