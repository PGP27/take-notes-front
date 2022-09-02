import { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '~/contexts/AuthContext';
import { CheckCircle, Warning, WarningCircle } from 'phosphor-react';

const Toast = () => {
  const { showToast, openToast, closeToast } = useAuth();

  const variantClasses = useMemo(() => {
    if (showToast.variant === 'error') return 'bg-red-500';
    if (showToast.variant === 'warning') return 'bg-yellow-500';
    if (showToast.variant === 'success') return 'bg-green-500';
  }, [showToast.variant]);

  useEffect(() => {
    const msCloseTime = 5000;
    const timer = setTimeout(() => openToast({ message: '' }), msCloseTime);
    return () => clearTimeout(timer);
  }, []);

  return ReactDOM.createPortal(
    <button
      className='absolute top-4 right-4 max-w-md bg-white translate-y-4 text-sm border border-gray-200 rounded transition hover:shadow hover:bg-gray-100 animate-down'
      onClick={() => closeToast()}
    >
      <div className='flex items-center'>
        {showToast.variant === 'error' && <WarningCircle className='text-xl ml-4 text-red-500' />}
        {showToast.variant === 'warning' && <Warning className='text-xl ml-4 text-yellow-500' />}
        {showToast.variant === 'success' && <CheckCircle className='text-xl ml-4 text-green-500' />}
        <p className='p-4 text-left'>
          {typeof showToast.message === 'string'
            ? showToast.message
            : showToast.message?.map((msg: string, index: number) => (
                <p
                  key={msg}
                  className={`${
                    showToast?.message && index < showToast.message.length - 1 && 'mb-2'
                  }`}
                >
                  {msg}
                </p>
              ))}
        </p>
      </div>
      <div className={`w-full h-1 rounded animate-decrease ${variantClasses}`} />
    </button>,
    document.body,
  );
};

export default Toast;
