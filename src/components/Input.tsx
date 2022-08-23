import React, { useMemo } from 'react';
import { InputModel } from '~/models/Input.model';

const Input: React.FC<InputModel> = ({ variant, className, children, ...rest }) => {
  const variantClasses = useMemo(() => {
    if (variant === 'enter') {
      return 'rounded border bg-gray-200 focus:bg-gray-50 text-sm focus:border-gray-500';
    }
    if (variant === 'header') {
      return 'border-b';
    }
  }, [variant]);

  return (
    <input
      {...rest}
      autoComplete='on'
      className={`outline-none py-2 px-4 transition ${variantClasses} ${className}`}
    >
      {children}
    </input>
  );
};

export default Input;
