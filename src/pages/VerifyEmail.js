import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      axios.post('http://localhost:5000/api/auth/verify-email', { token })
        .then(() => setMessage('Email verified successfully!'))
        .catch(() => setMessage('Email verification failed.'));
    } else {
      setMessage('Invalid verification token.');
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
