import React from 'react';
import PropTypes from 'prop-types';
import styles from './VegeFish.module.scss'
import vegeFish from '../../../assets/Vege.png';
import backgroundVege from '../../../assets/backgroundVege.png'
import iconI from '../../../assets/standardIcon1.png';
import iconII from '../../../assets/standardIcon2.png';
import Button from '../../atoms/button/Button';

const VegeFish = props => {
  return (
    <div className={styles.vegeFishDietContainer}>
      <div className={styles.vegeFishDietContainer__description}>
        <p className={styles.vegeFishDietContainer__description__diet}>dieta</p>
        <h1 className={styles.vegeFishDietContainer__description__dietName}>Vege&Fish</h1>
        <div className={styles.vegeFishDietContainer__description__kcalWrapper}>
          <div className={styles.vegeFishDietContainer__description__kcalWrapper__kcalItem}>
            <span className={styles.bold}>1200</span> kcal
          </div>
          <div className={styles.vegeFishDietContainer__description__kcalWrapper__kcalItem}>
            <span className={styles.bold}>1500</span> kcal
          </div>
          <div className={styles.vegeFishDietContainer__description__kcalWrapper__kcalItem}>
            <span className={styles.bold}>1800</span> kcal
          </div>
          <div className={styles.vegeFishDietContainer__description__kcalWrapper__kcalItem}>
            <span className={styles.bold}>2000</span> kcal
          </div>
          <div className={styles.vegeFishDietContainer__description__kcalWrapper__kcalItem}>
            <span className={styles.bold}>2500</span> kcal
          </div>
        </div>
        <p className={styles.vegeFishDietContainer__description__text}>
        Doskonale wiemy jak ważna jest odpowiednia dieta i dobrze skonstruowany plan żywieniowy przy wzmożonej aktywności fizycznej i intensywnych treningach. Dlatego też dietę sport stworzyliśmy tak, by nie tylko zawierała odpowiednią kaloryke i dostarczała niezbędną ilość energii, ale również wspierała regenerację mięśni i prawidłowe funkcjonowanie organizmu. Menu opracowane przez wykwalifikowanych dietetyków, odpowiedni bilans makroskładników i wspaniały smak to przepis na sukces każdego dnia!
        </p>
        <div className={styles.vegeFishDietContainer__description__iconsWrapper}>
          <img src={iconI} alt="" />
          <img src={iconII} alt="" />
        </div>
        <div className={styles.vegeFishDietContainer__description__buttonsWrapper}>
          <Button name="zamów online" margin="0 5px 0 0"/>
          <Button name="przykładowe menu"/>
        </div>
      </div>

      
        <div className={styles.vegeFishDietContainer__photosWrapper}>
          <img className={styles.vegeFishDietContainer__photosWrapper__photoBgc} src={backgroundVege} alt="" />
          <img className={styles.vegeFishDietContainer__photosWrapper__photoDiet} src={vegeFish} alt="" />
        </div>
      
    </div>
  );
};

VegeFish.propTypes = {
  
};

export default VegeFish;