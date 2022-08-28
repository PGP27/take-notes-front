import { useEffect } from 'react';
import Header from '~/components/Header';
import MainContent from '~/components/MainContent';
import { useApp } from '~/contexts/AppContext';

const Home = () => {
  const { mainContent, getAllUserNotes } = useApp();

  useEffect(() => {
    getAllUserNotes();
  }, []);

  return (
    <div className='flex'>
      <Header />
      <MainContent type={mainContent.type} />
    </div>
  );
};

export default Home;
