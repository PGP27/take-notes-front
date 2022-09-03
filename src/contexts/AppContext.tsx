import React, { createContext, useContext, useState } from 'react';
import { AppContextProps } from '~/models/AppContext.model';
import { DocumentModel } from '~/models/Document.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { ListModel } from '~/models/List.model';
import { MainContentProps } from '~/models/MainContent.model';
import { NoteModel } from '~/models/Note.model';
import { api } from '~/services/index.service';
import { useAuth } from './AuthContext';

const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const { user, token, openToast } = useAuth();

  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [mainContent, setMainContent] = useState<MainContentProps>({ type: null });
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [lists, setLists] = useState<ListModel[]>([]);
  const [document, setDocument] = useState<DocumentModel>();

  const changeShowModal = () => setShowModal((old) => !old);

  const changeMainContent = ({ type, id }: MainContentProps) => setMainContent({ type, id });

  const getAllDocuments = async () => {
    setLoadingData(true);
    await api
      .get('/note', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setNotes(res.data))
      .catch(() =>
        openToast({ variant: 'error', message: 'Erro ao buscar documentos do usuário.' }),
      );

    await api
      .get('/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setLists(res.data))
      .catch(() =>
        openToast({ variant: 'error', message: 'Erro ao buscar documentos do usuário.' }),
      );

    setLoadingData(false);
  };

  const getDocumentById = async ({ type, id }: MainContentProps) => {
    setLoadingData(true);

    if (!id) {
      setDocument(undefined);
    } else {
      await api
        .get(`/${type}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setDocument(res.data))
        .catch(() =>
          openToast({ variant: 'error', message: 'Erro ao buscar documentos do usuário.' }),
        );
    }

    setLoadingData(false);
  };

  const createNote = async ({ type }: MainContentProps) => {
    setLoadingData(true);
    await api
      .post(
        `/${type}`,
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .catch(() => openToast({ variant: 'error', message: 'Erro ao criar nova nota.' }));

    getAllDocuments();
  };

  return (
    <AppContext.Provider
      value={{
        mainContent,
        changeMainContent,
        showModal,
        changeShowModal,
        loadingData,
        getAllDocuments,
        getDocumentById,
        createNote,
        notes,
        lists,
        document,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => useContext(AppContext);

export { AppProvider, useApp };
