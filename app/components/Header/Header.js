'use client'
import { useState } from 'react';
import Modal from '../Modal/Modal'; // Ваш компонент модального окна
import OrderSummary from '../OrderSummary/OrderSummary';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../Redux/ordersSlice';

const Header = () => {
  const totalAmount = useSelector(selectCartTotal);
  const totalAmountHeader = totalAmount ? `: ${totalAmount} грн.` : '';
  const pathname = usePathname();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <Image
        src="./img/hero/food-sta.svg"
        alt="food-sta"
        width={66}
        height={52}
        priority
      />
      <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Головна
        </Link>
        <Link className={`link ${pathname === '/menu' ? 'active' : ''}`} href="/menu">
          Меню
        </Link>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
          Про нас
        </Link>
        <Link className={`link ${pathname === '/contacts' ? 'active' : ''}`} href="/contacts">
          Контакти
        </Link>
        <a className={`myOrder ${pathname === '/my-order' ? 'active' : ''}`} onClick={handleModalOpen}>
          Мій заказ{totalAmountHeader}
        </a>
      </nav>

      {/* Модальное окно для подсчёта заказа */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <OrderSummary />
      </Modal>
    </header>
  );
};

export default Header;