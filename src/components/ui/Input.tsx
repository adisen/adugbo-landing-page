// src/components/ui/Input.tsx
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const baseStyles =
      'w-full p-4 rounded-lg border-2 transition-colors focus:outline-none bg-transparent text-black';
    const borderStyles = error
      ? 'border-red-300 focus:border-red-500'
      : 'border-gray-800 focus:border-black';

    const inputClasses = `${baseStyles} ${borderStyles} ${className}`;

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-black mb-2">
            {label}
          </label>
        )}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
