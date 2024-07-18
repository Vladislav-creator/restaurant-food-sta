'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';  // Здесь используем useRouter
import { registerUser } from '../Redux/userSlice';  // Импортируйте ваше действие для регистрации

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser({ email, name, password }));  // Вызов действия регистрации
      router.push('/profile');  // Перенаправление на страницу профиля после успешной регистрации
    } catch (error) {
      console.error('Registration error:', error);
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
        type="text"
        name="user_name"  // Используем нестандартное имя
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
