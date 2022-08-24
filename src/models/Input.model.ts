interface InputProps {
  variant?: 'enter' | 'header' | 'item' | 'default';
}

export type InputModel = JSX.IntrinsicElements['input'] & InputProps;
