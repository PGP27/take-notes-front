interface ButtonProps {
  variant?: 'enter' | 'header' | 'default';
}

export type ButtonModel = JSX.IntrinsicElements['button'] & ButtonProps;
