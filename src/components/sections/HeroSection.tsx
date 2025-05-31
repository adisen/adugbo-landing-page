import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

import hearts from '@/assets/images/hearts.png';
import chain from '@/assets/images/chain.png';
import logo from '@/assets/images/logo.png';

interface HeroSectionProps {
  onJoinWaitlist?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onJoinWaitlist }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #FF5C7B40 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #CA5DFE40 0%, transparent 50%),
            radial-gradient(circle at 60% 70%, #FEE85F30 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, #A7FF6030 0%, transparent 50%),
            linear-gradient(135deg, #FF5C7B20 0%, #CA5DFE20 25%, #FEE85F20 50%, #A7FF6020 75%, #FF5C7B20 100%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20 py-10">
        <Image src={logo} alt="Logo" className="animate-pulse" />
      </div>
      <div className="absolute bottom-4 left-4 md:left-8 lg:left-20 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 z-10">
        <Image
          src={hearts}
          alt="Hand-drawn hearts"
          width={300}
          className="md:w-[400px] animate-pulse"
        />
      </div>
      <div className="absolute top-4 right-25 md:right-8 lg:right-20 md:top-1/3 md:transform md:-translate-y-1/2 z-10">
        <Image
          src={chain}
          alt="Chain illustration"
          width={300}
          className="md:w-[400px] text-yellow-400"
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto mt-16">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold mb-8 leading-tight font-calistoga">
          Create Better{' '}
          <span
            className="text-green-400"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.3))',
            }}
          >
            Together
          </span>
        </h1>

        <p className="text-2xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          A new home for creators to connect, collaborate, and grow.
        </p>

        <Button size="lg" onClick={onJoinWaitlist}>
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
