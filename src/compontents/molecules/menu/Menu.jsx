import React from 'react';
import PropTypes from 'prop-types';
import styles from '../menu/Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        
          <Link className={styles.list__item__link} to="Diets">
            diety
          </Link>
       
        <div className={styles.list__imte__line}></div>
      </li>
      <li className={styles.list__item}>
        <a className={styles.list__item__link} href="">
          cennik
        </a>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="Promotion">
          promocje
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="Delivery">
          dostawa
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <a className={styles.list__item__link} href="">
          blog
        </a>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="Contact">
          kontakt
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
    </ul>
  );
};

Menu.propTypes = {};

export default Menu;
