interface DescriptionProps {
  variant?: 'form' | 'default';
}

export type DescriptionModel = JSX.IntrinsicElements['p'] & DescriptionProps;
