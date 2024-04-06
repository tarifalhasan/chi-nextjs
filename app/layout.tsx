import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { neuemachina, pixel } from "./font";
import "./globals.css";
import "./style.css";
const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jet",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "CHI NFT",
  description:
    "In the realm where energies converge, CHI breathes,A force unseen, in the cosmic weave.",
  icons: "/Exclude.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable} ${neuemachina.variable} ${jet.variable} font-jet`}
      >
        {children}
      </body>
    </html>
  );
}
