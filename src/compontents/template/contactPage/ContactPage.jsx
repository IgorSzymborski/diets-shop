import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactPage.module.scss';
import womanImg from '../../../assets/womanContact.png';
import phoneIcons from '../../../assets/contactPhoneIcons.png';
import mailIcons from '../../../assets/contactMailIcons.png';
import ContactFooter from '../../organisms/contactFooter/ContactFooter';

const ContactPage = (props) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainer__photoWrapper}>
        <img className={styles.contactContainer__photoWrapper__photo} src={womanImg} alt="" />
      </div>
      <div className={styles.contactContainer__infoWrapper}>
        <div className={styles.contactDetailsContainer}>
          <div className={styles.contactContainer__infoWrapper__contactDetails}>
            <img
              className={styles.contactContainer__infoWrapper__contactDetails__icon}
              src={mailIcons}
              alt=""
            />
            <ul className={styles.contactContainer__infoWrapper__contactDetails__list}>
              <li className={styles.contactContainer__infoWrapper__contactDetails__list__item}>
                <span className={styles.bold}>+48 112 112 112</span>
              </li>
              <li className={styles.contactContainer__infoWrapper__contactDetails__list__item}>
                pon-pt
              </li>
              <li className={styles.contactContainer__infoWrapper__contactDetails__list__item}>
                08:00-16:00
              </li>
            </ul>
          </div>
          <div className={styles.contactContainer__infoWrapper__contactDetails}>
            <img
              className={styles.contactContainer__infoWrapper__contactDetails__icon}
              src={phoneIcons}
              alt=""
            />
            <ul className={styles.contactContainer__infoWrapper__contactDetails__list}>
              <li className={styles.contactContainer__infoWrapper__contactDetails__list__item}>
                <span className={styles.bold}>kontakt@kontakt.pl</span>
              </li>
            </ul>
          </div>
        </div>
        <ContactFooter />
      </div>
    </div>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
