import { useEffect, useState } from 'react';

interface MessageResponse {
  message: string;
}

export const useMessage = (userName?: string): Readonly<MessageResponse> => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(userName ? `Welcome ${userName}` : `Welcome`);

    const timer = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [userName]);

  return { message };
};
