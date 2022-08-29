import { Dispatch, SetStateAction } from 'react';
import { MainContentProps } from '~/models/MainContent.model';
export interface AppContextProps {
  mainContent: MainContentProps;
  setMainContent: Dispatch<SetStateAction<MainContentProps>>;
  loadingData: boolean;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  userNotes: any[];
  getAllUserNotes(): void;
}
