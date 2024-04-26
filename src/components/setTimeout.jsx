import React, { useState, useEffect } from 'react';

const DelayedMessage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Delayed message after 3 seconds');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <p>{message}</p>;
};

export default DelayedMessage;
