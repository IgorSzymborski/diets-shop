import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterInput.module.scss';

const FilterInput = ({}) => {
  return <input className={styles.input} placeholder="Wpisz nazwę miejscowości"></input>;
};

FilterInput.propTypes = {};

export default FilterInput;
