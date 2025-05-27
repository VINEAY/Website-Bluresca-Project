import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bluresca - Talent Management & Digital Marketing Agency",
  description:
    "Bluresca is a full-service talent management and digital marketing agency. We help your socials realize their full financial potential.",
  keywords: "talent management, digital marketing, OnlyFans, social media, Bluresca",
  authors: [{ name: "Bluresca" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased bg-black text-white min-h-screen">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
