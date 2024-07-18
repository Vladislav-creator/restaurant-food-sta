'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';  // Здесь используем useRouter
import { loginUser } from '../Redux/userSlice';  // Импортируйте ваше действие для регистрации

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email,  password }));  // Вызов действия регистрации
      router.push('/profile');  // Перенаправление на страницу профиля после успешной регистрации
    } catch (error) {
      console.error('login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        type="text"
        name="user_email"  // Используем нестандартное имя
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        autoComplete="off"
      />
      
      <input
        type="password"
        name="user_password"  // Используем нестандартное имя
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        autoComplete="off"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
