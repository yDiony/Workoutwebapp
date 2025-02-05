'use client'

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const generateToken = () => {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
};

const setTokenWithExpiry = () => {
  const token = generateToken();
  const expiry = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 horas
  Cookies.set('token', token, { expires: expiry });
};

const getToken = () => {
  return Cookies.get('authToken') || null;
};

const TokenButton = () => {
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(getToken());
    }, 60000); // Verifica a cada minuto
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setTokenWithExpiry();
    setToken(getToken());
  };

  return (
     <a href="/dashboard" onClick={handleClick} className="absolute bottom-[5vh] w-[90%] h-[52px] bg-black rounded-[8px] flex items-center justify-center">
            <p className="font-['montserrat'] text-[#fff] font-medium text-[16px]">Get started</p>
    </a>
  );
};

export default TokenButton;