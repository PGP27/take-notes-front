import { Eye, EyeSlash } from 'phosphor-react';
import React, { useMemo, useState } from 'react';
import { InputModel } from '~/models/Input.model';
import Button from './Button';

const Input: React.FC<InputModel> = ({ variant, className, type, children, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const variantClasses = useMemo(() => {
    if (variant === 'form') {
      return 'rounded border border-gray-300 bg-gray-200 focus:bg-gray-50 focus:border-gray-500';
    }
    if (variant === 'content') {
      return 'w-80 bg-transparent border-b';
    }
  }, [variant]);

  const changeShowPassword = () => setShowPassword((old) => !old);

  return (
    <div className={variant === 'form' ? 'relative w-full' : 'w-fit'}>
      <input
        {...rest}
        autoComplete='on'
        type={showPassword ? 'text' : type}
        className={`w-full outline-none py-2 px-4 transition ${variantClasses} ${className}`}
      >
        {children}
      </input>
      {type === 'password' && (
        <Button
          className='absolute top-[3px] right-1 w-fit rounded-full p-2 hover:bg-gray-300'
          type='button'
          onClick={changeShowPassword}
          title={showPassword ? 'Esconder senha' : 'Mostrar senha'}
        >
          {showPassword ? <EyeSlash fontSize={20} /> : <Eye fontSize={20} />}
        </Button>
      )}
    </div>
  );
};

export default Input;
