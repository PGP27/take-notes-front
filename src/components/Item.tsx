import { Trash } from 'phosphor-react';
import React, { useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';

const Item: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const itemRef = useRef<string>('');

  return (
    <div className='w-fit flex items-center'>
      <Input
        type='checkbox'
        onChange={({ target: { checked } }) =>
          checked && itemRef.current ? setChecked(true) : setChecked(false)
        }
      />
      <Input
        onChange={({ target: { value } }) => (itemRef.current = value)}
        className={`${checked && 'line-through'}`}
        placeholder='Novo item da lista'
        variant='content'
        maxLength={50}
      />
      <Button variant='close' className='ml-2'>
        <Trash />
      </Button>
    </div>
  );
};

export default Item;
