import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { BonusSection } from '@/components/landing/bonus-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { GuaranteeSection } from '@/components/landing/guarantee-section';
import { FinalCtaSection } from '@/components/landing/final-cta-section';
import { ExitIntentPopup } from '@/components/landing/exit-intent-popup';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BonusSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
