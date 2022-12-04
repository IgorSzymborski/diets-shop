import React from 'react';
import PropTypes from 'prop-types';
import styles from '../hamburgerButton/HamburgerButton.module.scss';

const HamburgerButton = ({ click }) => {
  return (
    <button onClick={click} className={styles.hamburger}>
      <span className={styles.hamburger__box}>
        <span className={styles.hamburger__inner}></span>
      </span>
    </button>
  );
};

HamburgerButton.propTypes = {};

export default HamburgerButton;
