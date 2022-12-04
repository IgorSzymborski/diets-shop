import React from 'react';
import PropTypes from 'prop-types';
import styles from './RightSideFooter.module.scss';

const RightSideFooter = (props) => {
  return (
    <div className={styles.rightSideContainer}>
      <ul className={styles.rightSideContainer__leftList}>
        <h2 className={styles.rightSideContainer__leftList__tittle}>Nasze diety</h2>
        <li className={styles.rightSideContainer__leftList__item}>
          <a className={styles.rightSideContainer__leftList__item__link} href="">
            standard
          </a>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <a className={styles.rightSideContainer__leftList__item__link} href="">
            vege
          </a>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <a className={styles.rightSideContainer__leftList__item__link} href="">
            vege+fish
          </a>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <a className={styles.rightSideContainer__leftList__item__link} href="">
            sport
          </a>
        </li>
        <li className={styles.rightSideContainer__leftList__item}>
          <a className={styles.rightSideContainer__leftList__item__link} href="">
            gluten&lactose free
          </a>
        </li>
      </ul>
      <ul className={styles.rightSideContainer__centerList}>
        <h2 className={styles.rightSideContainer__centerList__tittle}>Mapa strony</h2>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            strona główna
          </a>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            diety
          </a>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            cennik
          </a>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            promocje
          </a>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            dostawa
          </a>
        </li>
        <li className={styles.rightSideContainer__centerList__item}>
          <a className={styles.rightSideContainer__centerList__item__link} href="">
            polityka prywatności
          </a>
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
          <a className={styles.rightSideContainer__rightList__item__link} href="">
            kontakt
          </a>
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
