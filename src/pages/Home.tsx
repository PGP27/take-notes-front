import Header from '~/components/Header';
import MainContent from '~/components/MainContent';

const Home = () => {
  return (
    <div className='flex'>
      <Header />
      <MainContent type='checklist' />
    </div>
  );
};

export default Home;
