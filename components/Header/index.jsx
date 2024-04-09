'use client'
import { useState } from "react"
import Logo from "../Logo"
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={`${styles.header} ${showMenu && 'fixed md:relative w-full z-50'}`}>
      <div>
        <Logo handleClick={handleClick} img={'dark'}/>
      </div>
      <button
        onClick={handleClick}
        className="w-6 flex flex-col md:hidden gap-1">
        <span
          className={`${styles.menuBar} ${
            showMenu && 'rotate-45 translate-y-1'
          }`}></span>
        <span className={`${styles.menuBar} ${showMenu ? 'hidden':null}`}></span>
        <span
          className={`${styles.menuBar} ${
            showMenu && '-rotate-45 -translate-y-1'
          }`}></span>
      </button>
      <nav
        className={`${
          showMenu
            ? 'scale-x-100 origin-right opacity-100'
            : 'scale-x-0 origin-right opacity-0 md:scale-100 md:opacity-100'
        } ${styles.nav}`}>
        <ul className={styles.linksContainer}>
          <li onClick={handleClick} className={styles.link}>
            <Link href="/about">OUR COMPANY</Link>
          </li>
          <li onClick={handleClick} className={styles.link}>
            <Link href="/locations">LOCATIONS</Link>
          </li>
          <li onClick={handleClick} className={styles.link}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header