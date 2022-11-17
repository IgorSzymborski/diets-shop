import React from 'react';
import styles from '../button/Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ name, color, border }) => {
    return (
        <button className={styles.button} style={{ background: color, border: border }}>
            {name}
        </button>
    );
};

Button.propTypes = {};

export default Button;
