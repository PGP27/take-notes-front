interface InputProps {
  variant?: 'enter' | 'header' | 'default';
}

export type InputModel = JSX.IntrinsicElements['input'] & InputProps;
