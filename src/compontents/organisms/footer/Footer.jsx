import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';
import LeftSideFooter from '../../molecules/leftSideFooter/LeftSideFooter';
import RightSideFooter from '../../molecules/rightSideFooter/RightSideFooter';


const Footer = (props) => {
    return (
        <div className={styles.footerContainer}>
            <LeftSideFooter />
            <RightSideFooter />
        </div>
    );
};

Footer.propTypes = {};

export default Footer;
