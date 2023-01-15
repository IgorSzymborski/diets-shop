import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightSideFooter.module.scss';
import { Link } from 'react-router-dom';


const RightSideFooter = (props) => {
  return (
    <div className={styles.rightSideContainer}>
      <ul className={styles.rightSideContainer__leftList}>
        <h2 className={styles.rightSideContainer__leftList__tittle}>Nasze diety</h2>
        <li className={styles.rightSideContainer__leftList__item}>
          <Link className={styles.rightSideContainer__leftList__item__link} to="/diets/classic">
            classic
          </Link>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <Link className={styles.rightSideContainer__leftList__item__link} to="/diets/vegetarian">
            vegeterian
          </Link>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <Link className={styles.rightSideContainer__leftList__item__link} to="/diets/vegan">
            vegan
          </Link>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <Link className={styles.rightSideContainer__leftList__item__link} to="/diets/keto">
            keto
          </Link>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <Link className={styles.rightSideContainer__leftList__item__link} to="/diets/soft">
            soft
          </Link>
        </li>
      </ul>
      <ul className={styles.rightSideContainer__centerList}>
        <h2 className={styles.rightSideContainer__centerList__tittle}>Mapa strony</h2>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="/">
            strona główna
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="/diets/standard">
            diety
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="price">
            cennik
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="promotion">
            promocje
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="/delivery">
            dostawa
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <Link className={styles.rightSideContainer__centerList__item__link} to="">
            polityka prywatności
          </Link>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            regulamin
          </a>
        </li>
      </ul>
      <ul className={styles.rightSideContainer__rightList}>
        <h2 className={styles.rightSideContainer__rightList__tittle}>Zamówienia</h2>
        <li className={styles.rightSideContainer__rightList__item}>
          <Link className={styles.rightSideContainer__rightList__item__link} to="contact">
            kontakt
          </Link>
        </li>
        <li className={styles.rightSideContainer__rightList__item}>
          <a className={styles.rightSideContainer__rightList__item__link} href="">
            panel klienta
          </a>
        </li>
        <li className={styles.rightSideContainer__rightList__item}>
          <a className={styles.rightSideContainer__rightList__item__link} href="">
            zamów online
          </a>
        </li>
      </ul>
    </div>
  );
};

RightSideFooter.propTypes = {};

export default RightSideFooter;
