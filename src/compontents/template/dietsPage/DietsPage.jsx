import React from 'react';
import PropTypes from 'prop-types';
import styles from './DietsPage.module.scss';
import DietsHeader from '../../molecules/dietsHeader/DietsHeader';
import standard from '../../../assets/Standard.png';
import backgroundStandard from '../../../assets/backgroundStandard.png';
import iconI from '../../../assets/standardIcon1.png';
import iconII from '../../../assets/standardIcon2.png';
import Button from '../../atoms/button/Button';

const DietsPage = (props) => {
  return (
    <div className={styles.dietsContainer}>
      <DietsHeader />
      <div className={styles.standardDietContainer}>
        <div className={styles.standardDietContainer__description}>
          <p className={styles.standardDietContainer__description__diet}>dieta</p>
          <h1 className={styles.standardDietContainer__description__dietName}>Standard</h1>
          <div className={styles.standardDietContainer__description__kcalWrapper}>
            <div className={styles.standardDietContainer__description__kcalWrapper__kcalItem}>
              <span className={styles.bold}>1200</span> kcal
            </div>
            <div className={styles.standardDietContainer__description__kcalWrapper__kcalItem}>
              <span className={styles.bold}>1500</span> kcal
            </div>
            <div className={styles.standardDietContainer__description__kcalWrapper__kcalItem}>
              <span className={styles.bold}>1800</span> kcal
            </div>
            <div className={styles.standardDietContainer__description__kcalWrapper__kcalItem}>
              <span className={styles.bold}>2000</span> kcal
            </div>
            <div className={styles.standardDietContainer__description__kcalWrapper__kcalItem}>
              <span className={styles.bold}>2500</span> kcal
            </div>
          </div>
          <p className={styles.standardDietContainer__description__text}>
            Doskonale wiemy jak ważna jest odpowiednia dieta i dobrze skonstruowany plan żywieniowy
            przy wzmożonej aktywności fizycznej i intensywnych treningach. Dlatego też dietę sport
            stworzyliśmy tak, by nie tylko zawierała odpowiednią kaloryke i dostarczała niezbędną
            ilość energii, ale również wspierała regenerację mięśni i prawidłowe funkcjonowanie
            organizmu. Menu opracowane przez wykwalifikowanych dietetyków, odpowiedni bilans
            makroskładników i wspaniały smak to przepis na sukces każdego dnia!
          </p>
          <div className={styles.standardDietContainer__description__iconsWrapper}>
            <img src={iconI} alt="" />
            <img src={iconII} alt="" />
          </div>
          <div className={styles.standardDietContainer__description__buttonsWrapper}>
            <Button name="zamów online" margin="0 5px 5px 0" />
            <Button name="przykładowe menu" />
          </div>
        </div>

        <div className={styles.standardDietContainer__photosWrapper}>
          <img
            className={styles.standardDietContainer__photosWrapper__photoBgc}
            src={backgroundStandard}
            alt=""
          />
          <img
            className={styles.standardDietContainer__photosWrapper__photoDiet}
            src={standard}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

DietsPage.propTypes = {};

export default DietsPage;
