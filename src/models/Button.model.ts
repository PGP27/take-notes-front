interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'header' | 'close' | 'delete' | 'default';
}

export type ButtonModel = JSX.IntrinsicElements['button'] & ButtonProps;
