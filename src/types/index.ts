export interface FormData {
  email: string;
  firstName: string;
  platform: string;
}

export interface SectionProps {
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export interface AnimatedIconType {
  icon: 'search' | 'message' | 'users';
  className?: string;
}

export interface HeroSectionProps {
  onJoinWaitlist?: () => void;
}

export interface EarlyCreatorsSectionProps {
  onFormSubmit?: (data: FormData) => void;
}

export interface WaitlistFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}
