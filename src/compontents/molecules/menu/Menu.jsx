import React from 'react';
import PropTypes from 'prop-types';
import styles from '../menu/Menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="DietsPage">
          diety
        </Link>

        <div className={styles.list__imte__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="PricePage">
          cennik
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="PromotionPage">
          promocje
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
      <li className={styles.list__item}>
        <Link className={styles.list__item__link} to="DeliveryPage">
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
        <Link className={styles.list__item__link} to="ContactPage">
          kontakt
        </Link>
        <div className={styles.list__item__line}></div>
      </li>
    </ul>
  );
};

Menu.propTypes = {};

export default Menu;
