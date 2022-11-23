import React from 'react';
import PropTypes from 'prop-types';
import styles from './Diets.module.scss';
import DietsHeader from '../../molecules/dietsHeader/DietsHeader';
import { Routes, Route } from 'react-router-dom';
import StandardDiet from '../../organisms/standardDiet/StandardDiet';
import VegeDiet from '../../organisms/vegeDiet/VegeDiet';
import VegeFish from '../../organisms/vegeFIshDiet/VegeFish';
import SportDiet from '../../organisms/sportDiet/SportDiet';

const Diets = (props) => {
  return (
    <div className={styles.dietsContainer}>
      

      
      <DietsHeader />
        <Routes>
          <Route path="StandardDiet" element={<StandardDiet />} />
          <Route path="VegeDiet" element={<VegeDiet />} />
          <Route path="VegeFish" element={<VegeFish />} />
          
         
        </Routes>
     

      
    </div>
  );
};

Diets.propTypes = {};

export default Diets;
