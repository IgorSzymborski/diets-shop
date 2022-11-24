import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTemplate.module.scss';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Footer from '../../organisms/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Diets from '../diets/Diets';
import Promotion from '../promotion/Promotion';
import Contact from '../contact/Contact';

const MainTemplate = (props) => {
  return (
    <div className={styles.mainTemplateContainer}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Diets/*" element={<Diets />} />
          <Route path="Promotion" element={<Promotion />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
