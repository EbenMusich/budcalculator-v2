import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AgeVerification from "./AgeVerification";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AgeVerification />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}