import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "ImageAI",
  description: "AI-based Image Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-ibm antialiased", ibm.variable)}>{children}</body>
    </html>
  );
}
