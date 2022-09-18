import { NoteModel } from './Note.model';
import { MainContentProps } from '~/models/MainContent.model';
import { ListModel } from './List.model';
import { DocumentModel } from './Document.model';

export interface AppContextProps {
  mainContent: MainContentProps;
  changeMainContent({ type, id }: MainContentProps): void;
  loadingData: boolean;
  showModal: { name?: string; open: boolean };
  changeShowModal(name: string): void;
  getAllDocuments(): void;
  getDocumentById({ type, id }: MainContentProps): void;
  createDocument({ type }: MainContentProps): void;
  changeDocument(document: DocumentModel): void;
  updateNote({ title, text, id }: { title?: string; text?: string; id?: string }): void;
  notes: NoteModel[];
  lists: ListModel[];
  document: DocumentModel | undefined;
}
