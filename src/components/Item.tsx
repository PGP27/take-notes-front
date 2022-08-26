import { Trash } from 'phosphor-react';
import React, { useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';

const Item: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const itemRef = useRef<string>('');
  return (
    <div className='flex items-center'>
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
        variant='item'
        maxLength={50}
      />
      <Button className='w-fit rounded-full p-2 ml-2 hover:bg-zinc-100 hover:text-red-600'>
        <Trash />
      </Button>
    </div>
  );
};

export default Item;