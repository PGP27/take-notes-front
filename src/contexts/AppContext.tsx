import React, { createContext, useContext, useState } from 'react';
import { AppContextProps } from '~/models/AppContext.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { MainContentProps } from '~/models/MainContent.model';
import { api } from '~/services/index.service';
import { useAuth } from './AuthContext';

const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const { token } = useAuth();

  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [mainContent, setMainContent] = useState<MainContentProps>({ type: null });
  const [userNotes, setUserNotes] = useState([]);

  const getAllUserNotes = async () => {
    setLoadingData(true);
    await api
      .get('/note', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserNotes(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingData(false));
  };
  return (
    <AppContext.Provider
      value={{
        mainContent,
        setMainContent,
        openModal,
        setOpenModal,
        loadingData,
        userNotes,
        getAllUserNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
