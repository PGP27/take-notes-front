import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '~/contexts/AuthContext';

const Toast = () => {
  const { showToast, setShowToast } = useAuth();

  useEffect(() => {
    const msCloseTime = 5000;
    const timer = setTimeout(() => setShowToast(''), msCloseTime);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return ReactDOM.createPortal(
    <button
      className='absolute top-4 right-4 translate-y-4 text-sm border border-gray-200 rounded transition hover:shadow hover:bg-gray-100 animate-down'
      onClick={() => {
        setShowToast('');
      }}
    >
      <p className='p-4'>{showToast}</p>
      <div className='w-full h-1 bg-red-500 rounded animate-decrease' />
    </button>,
    document.body,
  );
};

export default Toast;
