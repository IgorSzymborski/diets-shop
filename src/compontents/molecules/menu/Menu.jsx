import React from 'react';
import PropTypes from 'prop-types';
import styles from '../menu/Menu.module.scss';

const Menu = (props) => {
    return (
        <ul className={styles.list}>
            <li className={styles.list__item}>
                <a href="">diety</a>
                <div className={styles.list__imte__line}></div>
            </li>
            <li className={styles.list__item}>
                <a href="">cennik</a>
                <div className={styles.list__item__line}></div>
            </li>
            <li className={styles.list__item}>
                <a href="">promocje</a>
                <div className={styles.list__item__line}></div>
            </li>
            <li className={styles.list__item}>
                <a href="">dostawa</a>
                <div className={styles.list__item__line}></div>
            </li>
            <li className={styles.list__item}>
                <a href="">blog</a>
                <div className={styles.list__item__line}></div>
            </li>
            <li className={styles.list__item}>
                <a href="">kontakt</a>
                <div className={styles.list__item__line}></div>
            </li>
        </ul>
    );
};

Menu.propTypes = {};

export default Menu;
