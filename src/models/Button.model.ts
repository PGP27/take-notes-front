interface ButtonProps {
  variant?: 'enter' | 'header' | 'close' | 'default';
}

export type ButtonModel = JSX.IntrinsicElements['button'] & ButtonProps;
