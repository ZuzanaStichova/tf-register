import React from 'react';
import Image from '../images/astronaut.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Image} alt="astronaut logo"/>
      <h2>Astronaut register</h2>
    </div>
  )
}

export default Header;