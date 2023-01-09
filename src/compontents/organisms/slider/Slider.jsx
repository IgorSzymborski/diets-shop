import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import photo from '../../../assets/Standard.png';
import Button from '../../atoms/button/Button';
import leftArrow from '../../../assets/leftArrow.png';
import rightArrow from '../../../assets/rightArrow.png';
import { dietsDetails } from '../../../data/data';

const Slider = ({ slides }) => {
  const [currentSlideCenter, setCurrentSlideCenter] = useState(0);
  const [currentSlideLeft, setCurrentSlideLeft] = useState(4);
  const [currentSlideRight, setCurrentSlideRight] = useState(1);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlideCenter(currentSlideCenter === length - 1 ? 0 : currentSlideCenter + 1);
    setCurrentSlideLeft(currentSlideLeft === length - 1 ? 0 : currentSlideLeft + 1);
    setCurrentSlideRight(currentSlideRight === length - 1 ? 0 : currentSlideRight + 1);
  };

  const prevSlide = () => {
    setCurrentSlideCenter(currentSlideCenter === 0 ? length - 1 : currentSlideCenter - 1);
    setCurrentSlideLeft(currentSlideLeft === 0 ? length - 1 : currentSlideLeft - 1);
    setCurrentSlideRight(currentSlideRight === 0 ? length - 1 : currentSlideRight - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) return null;

  return (
    <div className={styles.sliderContainer}>
      <p className={styles.sliderContainer__tittle}>
        Every day <br /> tastes <br className={styles.mobileBreak} /> great
      </p>
      <div className={styles.sliderContainer__photoWrapper}>
        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideLeft && (
              <div className={styles.sliderContainer__photoWrapper__left}>
                {index === currentSlideLeft && (
                  <img className={styles.photo} src={diet.photo} key={index} alt="" />
                )}
              </div>
            )
          );
        })}
        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideCenter && (
              <div className={styles.sliderContainer__photoWrapper__center}>
                <div className={styles.sliderContainer__photoWrapper__center__wrapper}>
                  <button
                    onClick={prevSlide}
                    className={styles.sliderContainer__photoWrapper__center__wrapper__leftArrow}
                  >
                    <img src={leftArrow} alt="" />
                  </button>
                  {index === currentSlideCenter && (
                    <img className={styles.photo} src={diet.photo} key={index} alt="" />
                  )}
                  <button
                    onClick={nextSlide}
                    className={styles.sliderContainer__photoWrapper__center__wrapper__rightArrow}
                  >
                    <img src={rightArrow} alt="" />
                  </button>
                </div>

                <div className={styles.sliderContainer__photoWrapper__center__info}>
                  <p
                    className={styles.sliderContainer__photoWrapper__center__info__dietName}
                    key={index}
                  >
                    {diet.name}
                  </p>
                  <div className={styles.sliderContainer__photoWrapper__center__info__buttons}>
                    <Button name="zamów online" color="#FFB526" />
                    <Button name="więcej o diecie" />
                  </div>
                </div>
              </div>
            )
          );
        })}

        {dietsDetails.map((diet, index) => {
          return (
            index === currentSlideRight && (
              <div className={styles.sliderContainer__photoWrapper__right}>
                {index === currentSlideRight && (
                  <img className={styles.photo} src={diet.photo} key={index} alt="" />
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

Slider.propTypes = {};

export default Slider;
