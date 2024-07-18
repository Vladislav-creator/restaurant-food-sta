

"use client";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, updateAvatar } from '../Redux/userSlice';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from './ProfileComponent.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  
  const [avatarFile, setAvatarFile] = useState(null);
  const router = useRouter();
   const BASEURL = process.env.NEXT_PUBLIC_BASEURL;
   const avatarURL = user ? `${BASEURL}/${user.avatarURL}` : '';
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleAvatarUpload = () => {
    if (avatarFile) {
      dispatch(updateAvatar(avatarFile));
    }
  };

  if (!user) {
    return null; // Можно добавить заглушку или прелоадер здесь
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <div className={styles.imageWrapper}>
        <Image
          src={avatarURL} // Добавляем начальный слеш для корректного пути
          alt={user.name}
          width={250}
          height={250}
          className={styles.image}
          priority={true}
        />
      </div>
      <p>Email: {user.email}</p>
      <div>
        <input type="file" onChange={handleAvatarChange} />
        <button onClick={handleAvatarUpload}>Upload Avatar</button>
      </div>
    </div>
  );
};

export default Profile;