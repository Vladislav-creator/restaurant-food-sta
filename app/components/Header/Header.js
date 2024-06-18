'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image';
// import styles from './Header.module.css';
const Header = () => {
  const pathname = usePathname() 
  return (
    <header>
       <Image
           src="./img/hero/food-sta.svg"
           alt="food-sta"
          //  className={styles.foodSta}
           width={66}
           height={52}
           priority
         />
        <nav>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Головна</Link>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">Про нас</Link>
        <Link className={`link ${pathname === '/contacts' ? 'active' : ''}`} href="/contacts">Контакти</Link>
        <Link className={`myOrder ${pathname === '/my-order' ? 'active' : ''}`} href="/my-order">Мій заказ</Link>
        </nav>
    </header>
  )
}

export default Header