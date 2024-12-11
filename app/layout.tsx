import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import { EdgeStoreProvider } from "@/lib/edgestore";

const raleway = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "CollegeWala",
  description: "A Perfect College Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
          <EdgeStoreProvider>
          <Navbar />
          {children}
          </EdgeStoreProvider>
      </body>
    </html>
  );
}