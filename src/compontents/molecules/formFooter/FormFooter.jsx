import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormFooter.module.scss';
import Button from '../../atoms/button/Button';

const FormFooter = (props) => {
  return (
    <div className={styles.formFooterContainer}>
      <div className={styles.formFooterContainer__allCost}>
        <p className={styles.formFooterContainer__allCost__text}>koszt całkowity</p>
        <p className={styles.formFooterContainer__allCost__price}>819,00 zł</p>
      </div>

      <div className={styles.formFooterContainer__deliver}>
        <p className={styles.formFooterContainer__deliver__cost}>+ dostawa (6zł dziennie)</p>
        <Button name="zamów online" color="#FFB526" />
      </div>
    </div>
  );
};

FormFooter.propTypes = {};

export default FormFooter;
