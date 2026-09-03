import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "REGAL — One Place. Everything You Need.",
  description:
    "REGAL is a modern all-in-one toolbox for study, productivity, media, coding, finance and everyday digital tasks.",
  openGraph: {
    title: "REGAL — One Place. Everything You Need.",
    description:
      "A modern collection of useful tools for study, productivity, media, coding, finance, and everyday digital tasks.",
    url: "https://regal.vercel.app",
    siteName: "REGAL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
