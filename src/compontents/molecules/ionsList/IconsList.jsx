import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconsList.module.scss';
import firstIcon from '../../../assets/autochlodnia.png';
import secondIcon from '../../../assets/dostawa.png';
import thirdIcon from '../../../assets/sms.png';

const IconsList = (props) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <div className={styles.list__item__container}>
          <img className={styles.list__item__container__img} src={firstIcon} alt="" />
          <p className={styles.list__item__container__text}>
            transport
            <br />
            autochłodniami
          </p>
        </div>
      </li>
      <li className={styles.list__item}>
        <div className={styles.list__item__container}>
          <img className={styles.list__item__container__img} src={secondIcon} alt="" />
          <p className={styles.list__item__container__text}>
            dostawa w <br /> godzinach <br /> 00:00-06:00
          </p>
        </div>
      </li>
      <li className={styles.list__item}>
        <div className={styles.list__item__container}>
          <img className={styles.list__item__container__img} src={thirdIcon} alt="" />
          <p className={styles.list__item__container__text}>
            powiadomienie <br /> SMS o przybyciu <br /> dostawcy
          </p>
        </div>
      </li>
    </ul>
  );
};

IconsList.propTypes = {};

export default IconsList;
