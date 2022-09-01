import React from 'react';
import { LogoModel } from '~/models/Logo.model';
import { NotePencil } from 'phosphor-react';

const Logo: React.FC<LogoModel> = ({ sm, className }) => {
  return (
    <div className={`w-fit flex items-end bg-white ${className}`}>
      <div>
        <p
          className={`${
            sm
              ? 'first-letter:text-xl first-letter:leading-4 leading-4'
              : 'first-letter:text-4xl first-letter:leading-8 text-2xl'
          }`}
        >
          Take
        </p>
        <p
          className={`${
            sm
              ? 'first-letter:text-xl first-letter:leading-4 leading-4 ml-2'
              : 'first-letter:text-4xl first-letter:leading-8 text-2xl ml-4'
          }`}
        >
          Notes
        </p>
      </div>
      <NotePencil className={`${sm ? 'ml-2 text-xl' : 'ml-4 text-3xl'}`} />
    </div>
  );
};

export default Logo;
