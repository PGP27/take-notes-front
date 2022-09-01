interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'header' | 'close' | 'default';
}

export type ButtonModel = JSX.IntrinsicElements['button'] & ButtonProps;
