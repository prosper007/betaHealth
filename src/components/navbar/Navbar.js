import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.NavBar}>
        <h2 className={styles.Brand}><a href='/'>BetaHealth</a></h2>
        <ul className={styles.NavLinks}>
          <li className={styles.NavLink}><a href='/about-us'>About us</a></li>
          <li className={styles.NavLink}><a href='/sign-up'>Sign up</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;