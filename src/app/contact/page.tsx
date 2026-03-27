import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { ContactInfoCardsSection } from "@/components/sections/ContactInfoCardsSection";
import { ContactMapSection } from "@/components/sections/ContactMapSection";

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactInfoCardsSection />
      <ContactFormSection />
      <ContactMapSection />
    </>
  );
}