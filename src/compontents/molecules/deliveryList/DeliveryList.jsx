import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeliveryList.module.scss';
import FilterInput from '../../atoms/filterInput/FilterInput';
import { deliveryCity } from '../../../data/data';
import { useState } from 'react';
const DeliveryList = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);
  return (
    <div className={styles.deliveryWrapper}>
      <FilterInput onChange={handleInputValue} />
      {inputValue !== '' && (
        <ul className={styles.deliveryWrapper__deliveryList}>
          {deliveryCity
            .filter((item) => {
              return inputValue.toLowerCase() === ''
                ? item
                : item.city.toLowerCase().includes(inputValue);
            })
            .map((city) => (
              <li key={city.city} className={styles.deliveryWrapper__deliveryList__item}>
                {city.city}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

DeliveryList.propTypes = {};

export default DeliveryList;
