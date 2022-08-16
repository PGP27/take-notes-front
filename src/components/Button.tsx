import React from 'react';

type ButtonModel = JSX.IntrinsicElements['button'];

const Button: React.FC<ButtonModel> = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} rounded py-2 bg-green-600 text-white transition hover:opacity-90 hover:shadow`}
    >
      {children}
    </button>
  );
};

export default Button;
