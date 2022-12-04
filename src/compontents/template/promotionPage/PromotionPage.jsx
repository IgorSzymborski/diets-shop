import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotionPage.module.scss';
import firstBanner from '../../../assets/promotionBannerBig1.png';
import secondBanner from '../../../assets/promotionBannerBig2.png';
import SocialMediaIcons from '../../atoms/socialMediaIcons/SocialMediaIcons';
import BlackInstagram from '../../../assets/BlackInstagram.png';
import BlackFacebook from '../../../assets/BlackFacebook.png';
import firstMobileBanner from '../../../assets/promotionBanerMobile1.png';

const PromotionPage = (props) => {
  return (
    <div className={styles.promotionContainer}>
      <div className={styles.promotionContainer__firstBanner}>
        <img className={styles.promotionContainer__firstBanner__imgNormal} src={firstBanner} alt="" />
        <img className={styles.promotionContainer__firstBanner__imgMobile} src={firstMobileBanner} alt="" />
      </div>
      <div className={styles.promotionContainer__secondBanner}>
        <div className={styles.promotionContainer__secondBanner__imgWrapper}>
          <img
            className={styles.promotionContainer__secondBanner__imgWrapper__img}
            src={secondBanner}
            alt=""
          />
        </div>
        <div className={styles.promotionContainer__secondBanner__infoWrapper}>
          <h1 className={styles.promotionContainer__secondBanner__infoWrapper__tittle}>Śledz nas</h1>
          <p className={styles.promotionContainer__secondBanner__infoWrapper__text}>Więcej promocji znajdziesz tu:</p>
          <div className={styles.promotionContainer__secondBanner__imgWrapper__butonsContainer}>
            <button className={styles.button} >
              <SocialMediaIcons logo={BlackInstagram} />
            </button>
            <button className={styles.button}><SocialMediaIcons logo={BlackFacebook} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

PromotionPage.propTypes = {};

export default PromotionPage;
