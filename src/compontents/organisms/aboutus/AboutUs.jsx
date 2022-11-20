import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutUs.module.scss';
import womanBackground from '../../../assets/woman-background.png';

const AboutUs = (props) => {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.aboutUsContainer__background}>
                <img className={styles.aboutUsContainer__background} src={womanBackground} alt="" />
            </div>
            <div className={styles.aboutUsContainer__text}>
              <h1 className={styles.aboutUsContainer__text__tittle}>Jesteśmy po to, aby każdy twój dzień samkował <span className={styles.orange}>wspaniale</span></h1>
              <p className={styles.aboutUsContainer__text__acapit}>Jakość, różnorodność i smak, to coś co wyróżnia nasze diety i sprawia, że podbijają one nie tylko podniebienia, ale i serca nawet najbardziej wymagających smakoszy. Naszą miłość do jedzenia i pasję do gotowania widać w każdym posiłku, który przygotowujemy z niezwykłą starannością i dbałością nawet o najdrobniejsze szczegóły. Nad naszym menu czuwa grono wykwalifikowanych dietetyków, bo wiemy, że codzienna dieta ma być nie tylko smaczna, ale i zdrowa. Odpowiedni bilans makroskładników, produkty najwyższej jakości i urozmaicone posiłki to nasz przepis na radość z jedzenia każdego dnia!</p>
            </div>
        </div>
    );
};

AboutUs.propTypes = {};

export default AboutUs;
