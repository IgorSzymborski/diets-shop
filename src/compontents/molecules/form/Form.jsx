import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import arrow from '../../../assets/arrow.png';

const Form = () => {
  return (
    <div className={styles.formWrapper}>
      <h1 className={styles.formWrapper__tittle}>Cennik</h1>

      <div className={styles.formWrapper__dietsWrapper}>
        <p className={styles.formWrapper__dietsWrapper__diets}>dieta</p>
        <button className={styles.button}>
          <p className={styles.formWrapper__dietsWrapper__typeDiet}>Standard</p>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>
      </div>

      <div className={styles.formWrapper__kcalWrapper}>
        <p className={styles.formWrapper__kcalWrapper__kcal}>kaloryczność</p>
        <button className={styles.button}>
          <p className={styles.formWrapper__kcalWrapper__typeDiet}>1200kcal</p>
          <img className={styles.arrow} src={arrow} alt="" />
        </button>
      </div>

      <div className={styles.formWrapper__dayWrapper}>
        <label className={styles.formWrapper__dayWrapper__numDays}>ilość dni</label>
        <input className={styles.formWrapper__dayWrapper__input} type="range" min="1" max="90" />
      </div>
      <div className={styles.line}></div>

      <div className={styles.formWrapper__info}>
        <div className={styles.formWrapper__info__details}>
          <p className={styles.formWrapper__info__details__dayCost}>koszt dzienny</p>
          <p className={styles.formWrapper__info__details__price}>39,00 zł</p>
        </div>

        <div className={styles.formWrapper__info__details}>
          <p className={styles.formWrapper__info__toSave}>oszczędzasz</p>
          <p className={styles.formWrapper__info__quantitySave}>84,00 zł</p>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {};

export default Form;
