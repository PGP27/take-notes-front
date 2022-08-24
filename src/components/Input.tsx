import React, { useMemo } from 'react';
import { InputModel } from '~/models/Input.model';

const Input: React.FC<InputModel> = ({ variant, className, children, ...rest }) => {
  const variantClasses = useMemo(() => {
    if (variant === 'enter') {
      return 'rounded border bg-gray-200 text-sm focus:bg-gray-50 focus:border-gray-500';
    }
    if (variant === 'header') {
      return 'w-80 bg-transparent border-b mb-4';
    }
    if (variant === 'item') {
      return 'w-80 bg-transparent border-b text-xs';
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
