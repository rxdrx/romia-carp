import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="snap-start min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center w-full">
          <AboutSection />
        </div>
        <Footer />
      </section>
    </>
  );
}


