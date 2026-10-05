import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anuj Kumar | Full Stack Developer",
  description: "Personal portfolio of Anuj Kumar, Full Stack Developer from Ranchi, Jharkhand, India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${manrope.variable} scroll-smooth font-manrope`}
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col selection:bg-accent/30 selection:text-accent font-manrope">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
