import React from 'react';
import PropTypes from 'prop-types';
import styles from './DietsPage.module.scss';
import DietsHeader from '../../molecules/dietsHeader/DietsHeader';
import standard from '../../../assets/Standard.png';
import backgroundStandard from '../../../assets/backgroundStandard.png';
import Button from '../../atoms/button/Button';
import { dietsDetails } from '../../../data/data';
import { useParams } from 'react-router-dom';

const DietsPage = (props) => {
  let { title } = useParams();

  const currentDietArray = dietsDetails.filter((diet) => {
    return diet.name === title;
  });

  return (
    <div className={styles.dietsContainer}>
      <DietsHeader />
      <div className={styles.standardDietContainer}>
        {currentDietArray.map((item) => (
          <div key={item.id} className={styles.standardDietContainer__description}>
            <p className={styles.standardDietContainer__description__diet}>dieta</p>
            <h1 className={styles.standardDietContainer__description__dietName}>{item.name}</h1>
            <ul className={styles.standardDietContainer__description__kcalWrapper}>
              {item.kcal.map((kcal) => (
                <li
                  key={kcal.kcal}
                  className={styles.standardDietContainer__description__kcalWrapper__kcalItem}
                >
                  <span className={styles.bold}>{kcal.kcal}</span> kcal
                </li>
              ))}
            </ul>
            <p className={styles.standardDietContainer__description__text}>{item.description}</p>
            <div className={styles.standardDietContainer__description__iconsWrapper}>
              <img src={item.firstIcon} alt="" />
              <img src={item.secondIcon} alt="" />
            </div>
            <div className={styles.standardDietContainer__description__buttonsWrapper}>
              <Button name="zamów online" margin="0 5px 5px 0" />
              <Button name="przykładowe menu" />
            </div>
          </div>
        ))}

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
