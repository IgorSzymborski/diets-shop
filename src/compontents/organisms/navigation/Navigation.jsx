import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../molecules/menu/Menu';
import styles from '../navigation/Navigation.module.scss';
import blackLogo from '../../../assets/BlackLogo.png';
import Button from '../../atoms/button/Button';
import SocialMediaIcons from '../../atoms/socialMediaIcons/SocialMediaIcons';
import BlackInstagram from '../../../assets/BlackInstagram.png';
import BlackFacebook from '../../../assets/BlackFacebook.png';
import HamburgerButton from '../../atoms/hamburgerButton/HamburgerButton';

const Navigation = (props) => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.navigationContainer}>
            {open && <Menu toggleMenu={toggleMenu} />}
            <div className={styles.navigationContainer__imgWrapper}>
                <img src={blackLogo} alt="" />
                <HamburgerButton click={toggleMenu} />
            </div>
            {open && 
                <div className={styles.navigationContainer__buttonsWrapper}>
                    <div className={styles.navigationContainer__buttonsWrapper__link}>
                        <Button name="zamów online" color="#FFB526" />
                        <Button name="panel klienta" border="2px solid #E9B993" color="white" />
                    </div>
                    <div className={styles.navigationContainer__buttonsWrapper__social}>
                        <SocialMediaIcons logo={BlackFacebook} />
                        <SocialMediaIcons logo={BlackInstagram} />
                    </div>
                </div>
            }
        </div>
    );
};

Navigation.propTypes = {};

export default Navigation;
