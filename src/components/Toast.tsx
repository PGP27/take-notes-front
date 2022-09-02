import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '~/contexts/AuthContext';

const Toast = () => {
  const { showToast, setShowToast } = useAuth();

  const variantClasses = useMemo(() => {
    if (showToast.variant === 'error') {
      return 'bg-red-500';
    }
    if (showToast.variant === 'warning') {
      return 'bg-yellow-500';
    }
    if (showToast.variant === 'success') {
      return 'bg-green-500';
    }
  }, [showToast.variant]);

  useEffect(() => {
    const msCloseTime = 5000;
    const timer = setTimeout(() => setShowToast({ message: '' }), msCloseTime);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return ReactDOM.createPortal(
    <button
      className='absolute top-4 right-4 translate-y-4 text-sm border border-gray-200 rounded transition hover:shadow hover:bg-gray-100 animate-down'
      onClick={() => {
        setShowToast({ message: '' });
      }}
    >
      <p className='p-4'>{showToast.message}</p>
      <div className={`w-full h-1 rounded animate-decrease ${variantClasses}`} />
    </button>,
    document.body,
  );
};

export default Toast;
