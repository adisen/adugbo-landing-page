'use client';
import HeroSection from '@/components/sections/HeroSection';
import FindCreatorsSection from '@/components/sections/FindCreatorsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WaitlistForm from '@/components/sections/WaitlistFormSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />

      <FindCreatorsSection />

      <FeaturesSection />

      <WaitlistForm />
    </div>
  );
}
