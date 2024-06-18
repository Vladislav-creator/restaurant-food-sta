'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image';
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
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
        <Link className={`link ${pathname === '/service' ? 'active' : ''}`} href="/service">Service</Link>
        </nav>
    </header>
  )
}

export default Header