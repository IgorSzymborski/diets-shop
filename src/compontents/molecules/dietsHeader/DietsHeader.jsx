import React from 'react';
import PropTypes from 'prop-types';
import styles from './DietsHeader.module.scss';
import smallStandard from '../../../assets/smallStandard.png';
import smallVege from '../../../assets/smallVege.png';
import smallVegeFish from '../../../assets/smallVegeFish.png';
import smallSport from '../../../assets/smallSport.png';
import SmallGlutenLactose from '../../../assets/smallGlutenLactose.png';
import mediumStandard from '../../../assets/mediumStandard.png';
import mediumVege from '../../../assets/mediumVege.png';
import mediumVegeFish from '../../../assets/mediumVegeFish.png';
import mediumSport from '../../../assets/mediumSport.png';
import mediumGlutenLactose from '../../../assets/mediumGlutenLactose.png';
import { Link } from 'react-router-dom';

const DietsHeader = (props) => {
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.headerContainer__link} to="/diets/standard">
        <div className={styles.headerContainer__link__photoContainer}>
          <img
            className={styles.headerContainer__link__photoContainer__smallImg}
            src={smallStandard}
            alt=""
          />
          <img
            className={styles.headerContainer__link__photoContainer__mediumImg}
            src={mediumStandard}
            alt=""
          />
          <p className={styles.headerContainer__link__photoContainer__dietsName}>Standard</p>
        </div>
      </Link>

      <Link className={styles.headerContainer__link} to="/diets/vege">
        <div className={styles.headerContainer__link__photoContainer}>
          <img
            className={styles.headerContainer__link__photoContainer__smallImg}
            src={smallVege}
            alt=""
          />
          <img
            className={styles.headerContainer__link__photoContainer__mediumImg}
            src={mediumVege}
            alt=""
          />
          <p className={styles.headerContainer__link__photoContainer__dietsName}>Vege</p>
        </div>
      </Link>

      <Link className={styles.headerContainer__link} to="/diets/vege+fish">
        <div className={styles.headerContainer__link__photoContainer}>
          <img
            className={styles.headerContainer__link__photoContainer__smallImg}
            src={smallVegeFish}
            alt=""
          />
          <img
            className={styles.headerContainer__link__photoContainer__mediumImg}
            src={mediumVegeFish}
            alt=""
          />
          <p className={styles.headerContainer__link__photoContainer__dietsName}>Vege+Fish</p>
        </div>
      </Link>



      <Link className={styles.headerContainer__link} to="/diets/sport">
        <div className={styles.headerContainer__link__photoContainer}>
          <img
            className={styles.headerContainer__link__photoContainer__smallImg}
            src={smallSport}
            alt=""
          />
          <img
            className={styles.headerContainer__link__photoContainer__mediumImg}
            src={mediumSport}
            alt=""
          />
          <p className={styles.headerContainer__link__photoContainer__dietsName}>Sport</p>
        </div>
      </Link>
      <Link className={styles.headerContainer__link} to="/diets/gluten&lactose">
        <div className={styles.headerContainer__link__photoContainer}>
          <img
            className={styles.headerContainer__link__photoContainer__smallImg}
            src={SmallGlutenLactose}
            alt=""
          />
          <img
            className={styles.headerContainer__link__photoContainer__mediumImg}
            src={mediumGlutenLactose}
            alt=""
          />
          <p className={styles.headerContainer__link__photoContainer__dietsName}>Gluten&Lactose</p>
        </div>
      </Link>
    </div>
  );
};

DietsHeader.propTypes = {};

export default DietsHeader;
