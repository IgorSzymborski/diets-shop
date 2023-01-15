import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFooter.module.scss';

const ContactFooter = (props) => {
  return (
    <div className={styles.contactFooterContainer}>
      <ul className={styles.contactFooterContainer__list}>
        <li className={styles.contactFooterContainer__list__item}>
          <span className={styles.bold}>Adres</span>
        </li>
        <li className={styles.contactFooterContainer__list__item}>ul.ul.Nowaka 5</li>
        <li className={styles.contactFooterContainer__list__item}>Warszawa</li>
      </ul>
      <ul className={styles.contactFooterContainer__list}>
        <li className={styles.contactFooterContainer__list__item}>
          <span className={styles.bold}>Dane firmy</span>
        </li>
        <li className={styles.contactFooterContainer__list__item}>NIP: 123123123</li>
        <li className={styles.contactFooterContainer__list__item}>REGON: 12312323</li>
      </ul>
      <ul className={styles.contactFooterContainer__list}>
        <li className={styles.contactFooterContainer__list__item}>
          <span className={styles.bold}>Nr konta</span>
        </li>
        <li className={styles.contactFooterContainer__list__item}>
          11 1111 1111 1111 1111 1111 1111
        </li>
        <li className={styles.contactFooterContainer__list__item}>Bank Polski</li>
      </ul>
    </div>
  );
};

ContactFooter.propTypes = {};

export default ContactFooter;
