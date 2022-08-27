import { Dispatch, SetStateAction } from 'react';
import { MainContentProps } from '~/models/MainContent.model';
export interface AppContextProps {
  mainContent: MainContentProps;
  setMainContent: Dispatch<SetStateAction<MainContentProps>>;
  loadingData: boolean;
  userNotes: any[];
  getAllUserNotes(): void;
}
