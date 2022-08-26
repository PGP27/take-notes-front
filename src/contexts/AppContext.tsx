import React, { createContext, useContext, useState } from 'react';
import { AppContextProps } from '~/models/AppContext.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { MainContentProps } from '~/models/MainContent.model';

const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const [mainContent, setMainContent] = useState<MainContentProps>({ type: null });
  return (
    <AppContext.Provider value={{ mainContent, setMainContent }}>{children}</AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
