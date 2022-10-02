import React, { createContext, useContext, useState } from 'react';
import { AppContextProps } from '~/models/AppContext.model';
import { DocumentModel } from '~/models/Document.model';
import { HaveChildrenProps } from '~/models/HaveChildren.model';
import { ListModel } from '~/models/List.model';
import { MainContentProps } from '~/models/MainContent.model';
import { NoteModel } from '~/models/Note.model';
import { UpdateAccountModel } from '~/models/UpdateAccount.model';
import { api } from '~/services/index.service';
import { useAuth } from './AuthContext';

const AppContext = createContext({} as AppContextProps);

const AppProvider: React.FC<HaveChildrenProps> = ({ children }) => {
  const { user, token, openToast, changeUser } = useAuth();

  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<{ name?: string; open: boolean }>({ open: false });
  const [mainContent, setMainContent] = useState<MainContentProps>({ type: null });
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [lists, setLists] = useState<ListModel[]>([]);
  const [document, setDocument] = useState<DocumentModel>();

  const changeShowModal = (name: string) => {
    setShowModal((old) => {
      if (old.name && old.name === name) {
        return {
          ...old,
          open: !old.open,
        };
      }
      return {
        name,
        open: true,
      };
    });
  };

  const changeMainContent = ({ type, id }: MainContentProps) => setMainContent({ type, id });

  const changeDocument = (newDocument: DocumentModel) =>
    setDocument((old) => ({ ...old, ...newDocument }));

  const updateAccount = async (
    { name, email, username, oldPassword, password }: UpdateAccountModel,
    id: string,
  ) => {
    setLoadingData(true);
    await api
      .patch(
        `/user/${id}`,
        {
          name,
          email,
          username,
          oldPassword: oldPassword === '' ? undefined : oldPassword,
          password: password === '' ? undefined : password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        changeUser({ name, email, username });
        changeShowModal('config');
        openToast({ variant: 'success', message: 'Conta atualizada com sucesso!' });
      })
      .catch((err) => openToast({ variant: 'warning', message: err.response.data.message }))
      .finally(() => setLoadingData(false));
  };

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
        .then((res) => {
          const { title, text } = res.data;
          setDocument({
            ...res.data,
            title: title || '',
            text: text || '',
          });
        })
        .catch(() =>
          openToast({ variant: 'error', message: 'Erro ao buscar documentos do usuário.' }),
        );
    }

    setLoadingData(false);
  };

  const createDocument = async ({ type }: MainContentProps) => {
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

  const updateNote = async ({
    title,
    text,
    id,
  }: {
    title?: string;
    text?: string;
    id?: string;
  }) => {
    setLoadingData(true);
    await api
      .patch(
        `/note/${id}`,
        { title, text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .catch(() => openToast({ variant: 'error', message: 'Erro ao atualizar nota.' }));

    getAllDocuments();
  };

  const deleteDocument = async ({ type, id }: MainContentProps) => {
    setLoadingData(true);

    await api
      .delete(`/${type}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => openToast({ variant: 'success', message: 'Documento excluído com sucesso!' }))
      .catch(() => openToast({ variant: 'error', message: 'Erro ao excluir documento.' }));

    changeShowModal('deleteDoc');
    changeMainContent({ type: null });
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
        updateAccount,
        getAllDocuments,
        getDocumentById,
        createDocument,
        changeDocument,
        updateNote,
        deleteDocument,
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
