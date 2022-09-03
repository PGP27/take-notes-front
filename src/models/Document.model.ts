import { ItemsModel } from './Item.model';

export interface DocumentModel {
  _id: string;
  user: string;
  text?: string;
  title?: string;
  items?: ItemsModel[];
}
