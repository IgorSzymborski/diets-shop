import React from 'react';
import PropTypes from 'prop-types';
import styles from './DeliveryPage.module.scss';
import map from '../../../assets/mapa 1.png';
import IconsList from '../../molecules/ionsList/IconsList';
import DeliveryList from '../../molecules/deliveryList/DeliveryList';

const DeliveryPage = (props) => {
  return (
    <div className={styles.deliveryContainer}>
      <div className={styles.deliveryContainer__backgroundWrapper}>
        <img className={styles.deliveryContainer__backgroundWrapper__img} src={map} alt="" />
      </div>
      <div className={styles.deliveryContainer__searchContainer}>
        <h1 className={styles.deliveryContainer__searchContainer__tittle}>Warszawa i okolice</h1>
        <DeliveryList />
      </div>
      <IconsList />
      <div className={styles.deliveryContainer__textWrapper}>
        <p className={styles.deliveryContainer__textWrapper__tittle}>
          Wychodzisz do pracy wcześniej?
        </p>
        <p className={styles.deliveryContainer__textWrapper__text}>
          Żaden problem! Podaj w uwagach do zamówienia preferowaną godzinę dostawy - dostosujemy się
          do Twoich potrzeb.
        </p>
        <p className={styles.deliveryContainer__textWrapper__text}>
          O dostawy dbają profesjonaliści z BoxBrothers.
        </p>
      </div>
    </div>
  );
};

DeliveryPage.propTypes = {};

export default DeliveryPage;
