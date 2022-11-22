import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTemplate.module.scss'
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Footer from '../../organisms/footer/Footer';

const MainTemplate = (props) => {
    return (
        <div className={styles.mainTemplateContainer}>
            <Navigation />
            <div>
                <HomePage />
            </div>
            <Footer />
        </div>
    );
};

MainTemplate.propTypes = {};

export default MainTemplate;
