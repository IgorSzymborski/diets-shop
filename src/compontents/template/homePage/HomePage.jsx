import React from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import Slider from '../../organisms/slider/Slider';
import AboutUs from '../../organisms/aboutus/AboutUs';

const HomePage = (props) => {
    return (
        <div className={styles.homePageContainer}>
            
            <Slider />
            <AboutUs />

        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
