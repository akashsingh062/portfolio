import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akash Singh | Full Stack Web Developer Portfolio",
  description: "Portfolio of Akash Singh, a Computer Science student and full-stack web developer building modern web applications with React, Next.js, Node.js, Express, and MongoDB.",
  keywords: "Akash Singh, Full Stack Developer, React Developer, Next.js Developer, Web Developer Portfolio, Node.js Developer, MongoDB Developer, Java Programmer",
  authors: [{ name: "Akash Singh", url: "https://github.com/akashsingh062" }],
  creator: "Akash Singh",
  openGraph: {
    title: "Akash Singh | Full Stack Web Developer",
    description: "Full-stack developer building production-grade web apps with Next.js, React, Node.js & MongoDB. Explore my projects and let's build something together.",
    type: "website",
    locale: "en_US",
    siteName: "Akash Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Singh | Full Stack Web Developer",
    description: "Full-stack developer building production-grade web apps with Next.js, React, Node.js & MongoDB.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

