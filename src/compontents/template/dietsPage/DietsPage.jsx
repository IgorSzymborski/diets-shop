import React from 'react';
import PropTypes from 'prop-types';
import styles from './DietsPage.module.scss';
import DietsHeader from '../../molecules/dietsHeader/DietsHeader';
import { Routes, Route } from 'react-router-dom';
import StandardDiet from '../../organisms/standardDiet/StandardDiet';



const DietsPage = (props) => {
  return (
    <div className={styles.dietsContainer}>
      <DietsHeader />
        <Routes>
          <Route path="StandardDiet" element={<StandardDiet />} />
          
        </Routes>
    </div>
  );
};

DietsPage.propTypes = {};

export default DietsPage;
