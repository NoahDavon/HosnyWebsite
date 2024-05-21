import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Media Houses",
  description: "For all your advertising needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-[#00B3D1] " + roboto.className}>{children}</body>
    </html>
  );
}
