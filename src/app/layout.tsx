import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akash Singh | Full Stack Web Developer Portfolio",
  description: "Portfolio of Akash Singh, a Computer Science student and full-stack web developer building modern web applications with React, Next.js, Node.js, Express, and MongoDB.",
  keywords: "Akash Singh, Full Stack Developer, React Developer, Next.js Developer, Web Developer Portfolio, Node.js Developer, MongoDB Developer, Java Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"></div>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
