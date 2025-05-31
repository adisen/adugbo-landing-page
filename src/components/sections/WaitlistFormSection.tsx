// src/components/sections/WaitlistFormSection.tsx
import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface FormData {
  email: string;
  firstName: string;
  platform: string;
}

interface WaitlistFormSectionProps {
  onFormSubmit?: (data: FormData) => void;
}

const WaitlistFormSection: React.FC<WaitlistFormSectionProps> = ({
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    platform: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onFormSubmit?.(formData);
      // Reset form on success
      setFormData({ email: '', firstName: '', platform: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#FEE85F]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <p className="text-lg mb-4 font-medium text-gray-800">
              This is just the beginning...
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-calistoga mb-8 leading-tight text-black">
              {"We're building this with early creators in mind."}
            </h2>

            <p className="text-lg leading-relaxed text-gray-800">
              {
                "Want to help shape the app? Join the waitlist and let's build it together."
              }
            </p>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />

              <select
                name="platform"
                value={formData.platform}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleInputChange(e)
                }
                className="w-full p-4 rounded-lg border-2 border-gray-800 bg-transparent text-gray-900 focus:outline-none focus:border-black transition-colors"
                required
              >
                <option value="" disabled className="bg-white text-gray-700">
                  What platform do you create on?
                </option>
                <option value="youtube" className="bg-white text-gray-900">
                  YouTube
                </option>
                <option value="tiktok" className="bg-white text-gray-900">
                  TikTok
                </option>
                <option value="instagram" className="bg-white text-gray-900">
                  Instagram
                </option>
                <option value="twitter" className="bg-white text-gray-900">
                  Twitter/X
                </option>
                <option value="linkedin" className="bg-white text-gray-900">
                  LinkedIn
                </option>
                <option value="twitch" className="bg-white text-gray-900">
                  Twitch
                </option>
                <option value="facebook" className="bg-white text-gray-900">
                  Facebook
                </option>
                <option value="snapchat" className="bg-white text-gray-900">
                  Snapchat
                </option>
                <option value="pinterest" className="bg-white text-gray-900">
                  Pinterest
                </option>
                <option value="other" className="bg-white text-gray-900">
                  Other
                </option>
              </select>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistFormSection;
