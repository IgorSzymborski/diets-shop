import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import photo from '../../../assets/Standard.png';
import Button from '../../atoms/button/Button';
import leftArrow from '../../../assets/leftArrow.png';
import rightArrow from '../../../assets/rightArrow.png';

const Slider = (props) => {
  return (
    <div className={styles.sliderContainer}>
      <p className={styles.sliderContainer__tittle}>
        Every day <br /> tastes <br className={styles.mobileBreak} /> great
      </p>

      <div className={styles.sliderContainer__photoWrapper}>
        <div className={styles.sliderContainer__photoWrapper__left}>
          <img className={styles.photo} src={photo} alt="" />
        </div>

        <div className={styles.sliderContainer__photoWrapper__center}>
          <div className={styles.sliderContainer__photoWrapper__center__wrapper}>
            <button className={styles.sliderContainer__photoWrapper__center__wrapper__leftArrow}>
              <img src={leftArrow} alt="" />
            </button>
            <img className={styles.photo} src={photo} alt="" />
            <button className={styles.sliderContainer__photoWrapper__center__wrapper__rightArrow}>
              <img src={rightArrow} alt="" />
            </button>
          </div>

          <div className={styles.sliderContainer__photoWrapper__center__info}>
            <p className={styles.sliderContainer__photoWrapper__center__info__dietName}>Standard</p>
            <div className={styles.sliderContainer__photoWrapper__center__info__buttons}>
              <Button name="zamów online" color="#FFB526" />
              <Button name="więcej o diecie" />
            </div>
          </div>
        </div>

        <div className={styles.sliderContainer__photoWrapper__right}>
          <img className={styles.photo} src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
