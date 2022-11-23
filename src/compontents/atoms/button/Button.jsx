import React from 'react';
import styles from '../button/Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ name, color, border, margin }) => {
    return (
        <button className={styles.button} style={{ background: color, border: border, margin: margin }}>
            {name}
        </button>
    );
};

Button.propTypes = {};

export default Button;
