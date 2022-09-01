interface InputProps {
  variant?: 'form' | 'header' | 'item' | 'default';
}

export type InputModel = JSX.IntrinsicElements['input'] & InputProps;
