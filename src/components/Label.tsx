import React from 'react';

type LabelModel = JSX.IntrinsicElements['label'];

const Label: React.FC<LabelModel> = ({ className, children, ...rest }) => {
  return (
    <label {...rest} className={`mt-4 mb-2 text-xs text-zinc-800 ${className}`}>
      {children}
    </label>
  );
};

export default Label;
