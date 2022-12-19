import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterInput.module.scss';

const FilterInput = ({onChange}) => {
  return <input className={styles.input} onChange={onChange} placeholder="Wpisz nazwę miejscowości"></input>;
};

FilterInput.propTypes = {};

export default FilterInput;
