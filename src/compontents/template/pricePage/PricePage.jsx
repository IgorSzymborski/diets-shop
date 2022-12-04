import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricePage.module.scss';
import standard from '../../../assets/Standard.png';
import FormWrapper from '../../organisms/formWrapper/FormWrapper';

const PricePage = (props) => {
  return (
    <div className={styles.pricePageContainer}>
      <div className={styles.pricePageContainer__formContainer}>
        <FormWrapper />
      </div>

      <div className={styles.pricePageContainer__photoWrapper}>
        <img className={styles.pricePageContainer__photoWrapper__photo} src={standard} alt="" />
      </div>
    </div>
  );
};

PricePage.propTypes = {};

export default PricePage;
