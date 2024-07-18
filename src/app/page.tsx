import Blog from "@/components/blog";
import Ecommerce from "@/components/ecommerce";
import Footer from "@/components/footer";
import HeroCard from "@/components/hero-card";
import Nav from "@/components/nav";
import Portfolio from "@/components/portfolio";
import WhatWeDo from "@/components/what-we-do";
import WhoWeAre from "@/components/who-we-are";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between dark:bg-gradient-to-b dark:from-black dark:to-black bg-gradient-to-br from-blue-800 to-cyan-400 overflow-hidden">
      <Nav />
      <HeroCard />
      <WhatWeDo />
      <Portfolio />
      <WhoWeAre />
      <Ecommerce />
      <Blog />
      <Footer />
    </main>
  );
}
