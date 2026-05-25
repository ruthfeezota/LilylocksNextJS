import ColorMatching from "@/src/components/ColorMatching";
import FinalCTA from "@/src/components/FinalCTA";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import PartnershipProgram from "@/src/components/PartnershipProgram";
import PerformanceSection from "@/src/components/PerformanceSection";
import TeamGallery from "@/src/components/TeamGallery";
import TeamPackages from "@/src/components/TeamPackages";
import Testimonials from "@/src/components/Testimonials";
import TopBanner from "@/src/components/TopBanner";
import VideoShowcase from "@/src/components/VideoShowcase";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Navbar/>
      <Hero/>
      <PerformanceSection/>
      <TeamPackages/>
      <ColorMatching/>
      <PartnershipProgram/>
      <VideoShowcase/>
      <Testimonials/>
      <FinalCTA/>
      <TeamGallery/>
      <Footer/>
    </main>
  );
}