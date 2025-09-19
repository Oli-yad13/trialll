import Hero from "@/components/sections/Hero"
import TypographyBridge from "@/components/sections/TypographyBridge"
import CinematicProblemSection from "@/components/sections/CinematicProblemSection"
import MavunoTransition from "@/components/sections/MavunoTransition"
import BenefitsSection from "@/components/sections/BenefitsSection"
import PartnersSection from "@/components/sections/PartnersSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TypographyBridge />
      <CinematicProblemSection />
      <MavunoTransition />
      <BenefitsSection />
      <PartnersSection />
    </div>
  );
}
