import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/widget/AppBar";
import Footer from "@/components/widget/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farmai",
  description: "ai in code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh]`}
      >
        <div className="flex min-h-screen justify-center w-full overflow-x-hidden flex-col">
          <AppBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
