import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeftSideFooter.module.scss';
import whiteLogo from '../../../assets/WhiteLogo.png';
import whiteInstagram from '../../../assets/whiteInstagram.png';
import whiteFacebook from '../../../assets/whiteFacebook.png';

const LeftSideFooter = (props) => {
  return (
    <div className={styles.leftSideContainer}>
      {/* <img className={styles.leftSideContainer__img} src={whiteLogo} alt="" /> */}
      <p className={styles.leftSideContainer__logo}>Logo</p>
      <div className={styles.leftSideContainer__list}>
        <ul className={styles.leftSideContainer__list__adress}>
          <li className={styles.leftSideContainer__list__adress__item}>
            <span className={styles.leftSideContainer__list__adress__item__bold}>Logo</span>
          </li>
          <li className={styles.leftSideContainer__list__adress__item}>ul.Nowaka 5</li>
          <li className={styles.leftSideContainer__list__adress__item}>Warszawa</li>
        </ul>
        <ul className={styles.leftSideContainer__list__contact}>
          <li className={styles.leftSideContainer__list__contact__item}>111 222 333</li>
          <li className={styles.leftSideContainer__list__contact__item}>pon.-pt.: 08:00-16:00</li>
          <li className={styles.leftSideContainer__list__contact__item}>kontakt@kontakt.pl</li>
        </ul>
        <div className={styles.leftSideContainer__socialIcons}>
          <img className={styles.leftSideContainer__socialIcons__img} src={whiteInstagram} alt="" />
          <img className={styles.leftSideContainer__socialIcons__img} src={whiteFacebook} alt="" />
        </div>
      </div>
    </div>
  );
};

LeftSideFooter.propTypes = {};

export default LeftSideFooter;
