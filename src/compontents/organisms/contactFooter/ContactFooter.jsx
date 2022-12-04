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
        <li className={styles.contactFooterContainer__list__item}>ul.Karola Krupińskiego 5</li>
        <li className={styles.contactFooterContainer__list__item}>Marki</li>
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
          69 1020 4724 0000 3602 0141 3095
        </li>
        <li className={styles.contactFooterContainer__list__item}>PKO BANK</li>
      </ul>
    </div>
  );
};

ContactFooter.propTypes = {};

export default ContactFooter;
