import React from 'react';
import PropTypes from 'prop-types';
import styles from '../socialMediaIcons/SocialMediaIcons.module.scss';

const SocialMediaIcons = ({ logo }) => {
    return (
        <button className={styles.button}>
            <img src={logo} alt="" />
        </button>
    );
};

SocialMediaIcons.propTypes = {};

export default SocialMediaIcons;
