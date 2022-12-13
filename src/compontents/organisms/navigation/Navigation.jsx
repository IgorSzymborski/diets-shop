import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../molecules/menu/Menu';
import styles from '../navigation/Navigation.module.scss';
import blackLogo from '../../../assets/BlackLogo.png';
import Button from '../../atoms/button/Button';
import SocialMediaIcons from '../../atoms/socialMediaIcons/SocialMediaIcons';
import BlackInstagram from '../../../assets/BlackInstagram.png';
import BlackFacebook from '../../../assets/BlackFacebook.png';
import HamburgerButton from '../../atoms/hamburgerButton/HamburgerButton';
import { Link } from 'react-router-dom';


const Navigation = (props) => {
  const [open, setOpen] = useState(true);
  const [colorChange, setColorChange] = useState(false);
  

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  };

  const { width } = useWindowDimensions();

  const hoverMenuOnMobile = () => {
    if (width > 1000) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  window.addEventListener('resize', hoverMenuOnMobile);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavColor);







  return (
    <div
      className={`${styles.navigationContainer} ${
        open ? styles.active : styles.navigationContainer
      } ${colorChange ? styles.activeNavbar : styles.navigationContainer}`}
    >
      {open && <Menu toggleMenu={toggleMenu} />}
      <div className={styles.navigationContainer__imgWrapper}>
        <Link to="/">
          <img src={blackLogo} alt="" />
        </Link>
        <HamburgerButton click={toggleMenu} />
      </div>
      {open && (
        <div className={styles.navigationContainer__buttonsWrapper}>
          <div className={styles.navigationContainer__buttonsWrapper__link}>
            <Button name="panel klienta" color="#FFB526" margin="0 3px 5px 3px" />
            <Button
              name="zamów online"
              border="1px solid #E9B993"
              color="white"
              margin="0 3px 5px 3px"
            />
          </div>
          <div className={styles.navigationContainer__buttonsWrapper__social}>
            <SocialMediaIcons logo={BlackFacebook} />
            <SocialMediaIcons logo={BlackInstagram} />
          </div>
        </div>
      )}
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
