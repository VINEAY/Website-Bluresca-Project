"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased bg-black text-white min-h-screen";
  }, []);

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />
      <main className="flex-grow mt-20">{children}</main>
      <Footer />
    </div>
  );
}
