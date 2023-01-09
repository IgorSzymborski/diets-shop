import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import Slider from '../../organisms/slider/Slider';
import AboutUs from '../../organisms/aboutus/AboutUs';
import HowItWorks from '../../organisms/howItWorks/HowItWorks';
import { dietsDetails } from '../../../data/data';

const HomePage = (props) => {
    return (
        <div className={styles.homePageContainer}>
            <Slider slides={dietsDetails}/>
            <AboutUs />
            <HowItWorks />
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
