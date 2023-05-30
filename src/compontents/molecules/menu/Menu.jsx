import React from 'react';
import PropTypes from 'prop-types';
import styles from '../menu/Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = ({onClick}) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link onClick={onClick} className={styles.list__item__link} to="diets/classic">
          diety
        </Link>

        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link onClick={onClick} className={styles.list__item__link} to="price">
          cennik
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link onClick={onClick} className={styles.list__item__link} to="promotion">
          promocje
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link onClick={onClick} className={styles.list__item__link} to="delivery">
          dostawa
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <a onClick={onClick} className={styles.list__item__link} href="">
          blog
        </a>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link onClick={onClick} className={styles.list__item__link} to="contact">
          kontakt
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
    </ul>
  );
};

Menu.propTypes = {};

export default Menu;
