import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainTemplate.module.scss';
import Navigation from '../../organisms/navigation/Navigation';
import HomePage from '../homePage/HomePage';
import Footer from '../../organisms/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DietsPage from '../dietsPage/DietsPage';
import PromotionPage from '../promotionPage/PromotionPage';
import ContactPage from '../contactPage/ContactPage';
import DeliveryPage from '../deliveryPage/DeliveryPage';
import PricePage from '../pricePage/PricePage';

const MainTemplate = (props) => {
  return (
    <div className={styles.mainTemplateContainer}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="DietsPage/*" element={<DietsPage />} />
          <Route path="PromotionPage" element={<PromotionPage />} />
          <Route path="ContactPage" element={<ContactPage />} />
          <Route path="DeliveryPage" element={<DeliveryPage />} />
          <Route path="PricePage" element={<PricePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
