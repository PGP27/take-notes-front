import { NoteModel } from './Note.model';
import { MainContentProps } from '~/models/MainContent.model';
import { ListModel } from './List.model';
import { DocumentModel } from './Document.model';

export interface AppContextProps {
  mainContent: MainContentProps;
  changeMainContent({ type, id }: MainContentProps): void;
  loadingData: boolean;
  showModal: boolean;
  changeShowModal(): void;
  getAllDocuments(): void;
  getDocumentById({ type, id }: MainContentProps): void;
  notes: NoteModel[];
  lists: ListModel[];
  document: DocumentModel | undefined;
}
