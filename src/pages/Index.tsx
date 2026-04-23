import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { About } from "@/components/sections/About";
import { Collections } from "@/components/sections/Collections";
import { Reviews } from "@/components/sections/Reviews";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/sections/FloatingActions";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Vishnu Jewels — Trusted Jewelry Store in Whitefield, Bangalore";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Vishnu Jewels — 4.9★ rated jewelry store in Whitefield, Bangalore. Premium gold, silver, diamond, bridal & temple jewelry collections.');
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBadges />
      <About />
      <Collections />
      <Reviews />
      <WhyChooseUs />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
