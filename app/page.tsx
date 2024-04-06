import Footer from "@/components/Footer";
import Tokenomics from "@/components/Tokenomics";
import Header from "@/components/header";
import Hero from "@/components/hero";

import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://chi-one.vercel.app/"),
  title: {
    default: "CHI NFT",
    template: `%s | CHI NFT`,
  },
  description:
    "In the realm where energies converge, CHI breathes,A force unseen, in the cosmic weave.",
  alternates: {
    canonical: `https://chi-one.vercel.app/`,
    languages: {
      en: "en-US",
    },
  },
  keywords: ["chi nft", "nft"],
  icons: "/Exclude.svg",
};
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Tokenomics />
      <Footer />
    </main>
  );
}
