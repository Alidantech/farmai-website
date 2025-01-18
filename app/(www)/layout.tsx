import Header from "@/app/(www)/widget/Header";
import React from "react";
import Footer from "./widget/Footer";

export default function WWWLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
