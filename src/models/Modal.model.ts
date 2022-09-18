import { ReactNode } from 'react';

export interface ModalModel {
  name: string;
  title?: string;
  children: ReactNode;
}
