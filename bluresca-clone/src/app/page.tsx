import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ModelsSection from "@/components/sections/ModelsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-black">
      {/* First section - Hero */}
      <Hero />

      {/* Second section - About/Working with Bluresca */}
      <AboutSection />

      {/* Third section - Models */}
      <ModelsSection />

      {/* Fourth section - Services */}
      <ServicesSection />

      {/* Fifth section - Contact Form */}
      <ContactSection />
    </main>
  );
}
