import React, { useMemo } from 'react';
import { DescriptionModel } from '~/models/Description.model';

const Description: React.FC<DescriptionModel> = ({ variant, children, className, ...rest }) => {
  const variantClasses = useMemo(() => {
    if (variant === 'form') {
      return 'mb-4';
    }
  }, [variant]);
  return (
    <p {...rest} className={`text-sm text-zinc-600 ${variantClasses} ${className}`}>
      {children}
    </p>
  );
};

export default Description;
