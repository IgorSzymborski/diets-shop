import React from 'react';
import PropTypes from 'prop-types';
import styles from './HowItWorks.module.scss';
import firstStep from '../../../assets/step 1.png';
import secondStep from '../../../assets/step 2.png';
import thirdStep from '../../../assets/step 3.png';
import fourthStep from '../../../assets/step 4.png';

const HowItWorks = (props) => {
  return (
    <div className={styles.howItWorksContainer}>
      <h1 className={styles.howItWorksContainer__tittle}>A działa to tak</h1>
      <ul className={styles.howItWorksContainer__list}>
        <li className={styles.howItWorksContainer__list__item}>
          <img className={styles.howItWorksContainer__list__item__img} src={firstStep} alt="" />
        </li>
        <li className={styles.howItWorksContainer__list__item}>
          <img className={styles.howItWorksContainer__list__item__img} src={secondStep} alt="" />
        </li>
        <li className={styles.howItWorksContainer__list__item}>
          <img className={styles.howItWorksContainer__list__item__img} src={thirdStep} alt="" />
        </li>
        <li className={styles.howItWorksContainer__list__item}>
          <img className={styles.howItWorksContainer__list__item__img} src={fourthStep} alt="" />
        </li>
      </ul>
    </div>
  );
};

HowItWorks.propTypes = {};

export default HowItWorks;
