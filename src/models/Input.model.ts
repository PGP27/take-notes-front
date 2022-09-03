interface InputProps {
  variant?: 'form' | 'content' | 'default';
}

export type InputModel = JSX.IntrinsicElements['input'] & InputProps;
