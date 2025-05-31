// src/components/sections/FeaturesSection.tsx
import React from 'react';
import Image from 'next/image';

// Import images from assets
import magnifyingGlass from '@/assets/images/magnifying-glass.svg';
import feedbackBubble from '@/assets/images/feedback-bubble.svg';
import celebrationFigures from '@/assets/images/celebration-figures.svg';

// Individual Feature Component
interface FeatureItemProps {
  title: string;
  description: string;
  imageSrc: any;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  animationElement?: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  animationElement,
}) => {
  return (
    <div className="relative py-16 px-6 overflow-hidden lg:h-[500px] flex items-center justify-between">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div
            className={`md:w-1/2 order-2 text-center md:text-left ${
              imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <h2 className="text-3xl font-calistoga mb-4 text-white leading-tight">
              {title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Content */}
          <div
            className={`md:w-1/2 flex justify-center order-1 ${
              imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
            }`}
          >
            <div className="relative w-3/4 flex justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="filter drop-shadow-lg h-[500px]"
              />
              {animationElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative bg-[#1E1E1E]">
      {/* Gradient overlay for first section only */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3 opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 400px 300px at 70% 50%, #CA5DFE20 0%, transparent 60%),
            radial-gradient(ellipse 350px 250px at 75% 45%, #FEE85F15 0%, transparent 55%),
            radial-gradient(ellipse 300px 200px at 80% 55%, #FF5C7B15 0%, transparent 50%),
            radial-gradient(ellipse 250px 180px at 85% 40%, #A7FF6015 0%, transparent 45%)
          `,
        }}
      />

      {/* Find Your Perfect Collab Partner */}
      <FeatureItem
        title="Find Your Perfect Collab Partner"
        description="Filter by niche, location, content style, and follower size. No random swiping—just intentional creator-to-creator connections."
        imageSrc={magnifyingGlass}
        imageAlt="Magnifying glass illustration"
        imagePosition="right"
        animationElement={
          <div className="absolute top-4 right-4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-ping" />
        }
      />

      {/* Get Honest Feedback */}
      <FeatureItem
        title="Get Honest Feedback Before or After You Post"
        description="Upload your drafts (thumbnails, captions, video clips) and get real, structured feedback from fellow creators. You help them, they help you."
        imageSrc={feedbackBubble}
        imageAlt="Feedback speech bubble illustration"
        imagePosition="left"
        animationElement={
          <div className="absolute bottom-4 left-4 w-10 h-10 bg-blue-400 rounded-full opacity-20 animate-pulse" />
        }
      />

      {/* Grow With a Supportive Creator Community */}
      <FeatureItem
        title="Grow With a Supportive Creator Community"
        description="Discover opportunities, share tips, and celebrate wins together."
        imageSrc={celebrationFigures}
        imageAlt="Celebrating community figures illustration"
        imagePosition="right"
        animationElement={
          <>
            <div className="absolute top-0 right-0 w-16 h-16 border-4 border-yellow-400 rounded-full animate-spin opacity-30" />
            <div
              className="absolute bottom-0 left-0 w-12 h-12 border-4 border-yellow-400 rounded-full animate-spin opacity-20"
              style={{
                animationDirection: 'reverse',
                animationDelay: '1s',
              }}
            />
          </>
        }
      />
    </section>
  );
};

export default FeaturesSection;
