import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import CollectionsSection from "./components/CollectionsSection";
import ExperienceSection from "./components/ExperienceSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <AboutSection />
        <CollectionsSection />
        <ExperienceSection />
        <ContactSection />
        <FAQSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
