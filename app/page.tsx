import ColorMatching from "@/src/components/ColorMatching";
import FinalCTA from "@/src/components/FinalCTA";
import Hero from "@/src/components/Hero";
import PartnershipProgram from "@/src/components/PartnershipProgram";
import PerformanceSection from "@/src/components/PerformanceSection";
import TeamGallery from "@/src/components/TeamGallery";
import TeamPackages from "@/src/components/TeamPackages";
import Testimonials from "@/src/components/Testimonials";
import VideoShowcase from "@/src/components/VideoShowcase";

export default function Home() {
  return (
    <main>

      <Hero/>
      <PerformanceSection/>
      <TeamPackages/>
      <ColorMatching/>
      <PartnershipProgram/>
      <VideoShowcase/>
      <Testimonials/>
      <FinalCTA/>
      <TeamGallery/>
    </main>
  );
}