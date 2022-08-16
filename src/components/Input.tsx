import React from 'react';

type InputModel = JSX.IntrinsicElements['input'];

const Input: React.FC<InputModel> = ({ className, children, ...rest }) => {
  return (
    <input
      {...rest}
      className={`${className} outline-none rounded border bg-gray-200 focus:bg-gray-50 focus:border-gray-500 py-2 px-4 transition`}
    >
      {children}
    </input>
  );
};

export default Input;
