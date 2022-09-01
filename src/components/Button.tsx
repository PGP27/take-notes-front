import React, { useMemo } from 'react';
import { ButtonModel } from '~/models/Button.model';

const Button: React.FC<ButtonModel> = ({ variant, className, children, ...rest }) => {
  const variantClasses = useMemo(() => {
    if (variant === 'primary') {
      return 'text-white font-medium bg-green-600 hover:bg-green-700';
    }
    if (variant === 'secondary') {
      return 'text-green-600 font-medium hover:text-green-700 hover:bg-gray-100';
    }
    if (variant === 'header') {
      return 'flex items-center gap-2 p-4 text-black text-xs rounded-none hover:bg-zinc-200';
    }
    if (variant === 'close') {
      return 'w-fit rounded-full p-2 hover:bg-zinc-100 hover:text-red-600';
    }
  }, [variant]);

  return (
    <button {...rest} className={`w-full rounded py-2 transition ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
