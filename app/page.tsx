import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapacitySection from "@/components/CapacitySection";
import SolutionsSection from "@/components/SolutionsSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ImageSection from "@/components/ImageSection";
import AcceleratingSection from "@/components/AcceleratingSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CapacitySection />
      <SolutionsSection />
      <StatsSection />
      <TestimonialsSection />
      <ImageSection />
      <AcceleratingSection />
      <WorkTogetherSection />

      <Footer />
    </div>
  );
}
