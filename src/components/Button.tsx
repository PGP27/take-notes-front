import React, { useMemo } from 'react';
import { ButtonModel } from '~/models/Button.model';

const Button: React.FC<ButtonModel> = ({ variant, className, children, ...rest }) => {
  const variantClasses = useMemo(() => {
    if (variant === 'enter') {
      return 'bg-green-600';
    }
    if (variant === 'header') {
      return 'flex items-center gap-2 p-4 text-black text-xs rounded-none hover:bg-zinc-200';
    }
  }, [variant]);

  return (
    <button
      {...rest}
      className={`w-full rounded py-2 transition hover:opacity-90 hover:shadow ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
