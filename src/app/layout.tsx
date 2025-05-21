import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Absolute Laser & Manufacturing - Precision Metal Fabrication",
  description:
    "Discover premium metal fabrications and precise laser cutting services. Enhance your projects with top-quality craftsmanship from Absolute Laser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClientBody className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-[116px]">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
