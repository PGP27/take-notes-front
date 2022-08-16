import React from 'react';

type LabelModel = JSX.IntrinsicElements['label'];

const Label: React.FC<LabelModel> = ({ className, children, ...rest }) => {
  return (
    <label {...rest} className={`${className} mt-4 mb-2 text-sm text-zinc-800`}>
      {children}
    </label>
  );
};

export default Label;
