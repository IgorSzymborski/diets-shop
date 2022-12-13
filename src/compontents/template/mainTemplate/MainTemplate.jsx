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
import ScrollToTop from '../../../ScrollToTop';


const MainTemplate = (props) => {
  return (
    <div className={styles.mainTemplateContainer}>
      <BrowserRouter>
        <Navigation />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="diets/:title" element={<DietsPage />} />
            <Route path="promotion" element={<PromotionPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="delivery" element={<DeliveryPage />} />
            <Route path="price" element={<PricePage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
