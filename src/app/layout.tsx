import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono", // This is the CSS variable name
  subsets: ["latin"],
  weight: ["400", "700"], // Include weights for regular and bold
});

export const metadata: Metadata = {
  title: "Aditiii's portfolio",
  description: "My personal portfolio website",
};

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} antialiased bg-[#100f13] text-gray-200`}
      >
        <div className="flex flex-col min-h-screen font-mono">
          <Navbar/ >
          {children}
          <Footer/ >
        </div>
        
      </body>
    </html>
  );
}
