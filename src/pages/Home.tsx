import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Hero } from "../components/Hero";
import { ReliabilityBeat } from "../components/ReliabilityBeat";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { BeliefStrip } from "../components/BeliefStrip";
import { FaqSection } from "../components/FaqSection";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ReliabilityBeat />
        <FeatureShowcase />
        <BeliefStrip />
        <FaqSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
