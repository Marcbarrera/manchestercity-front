import React from 'react';
import { CityLogo } from '../Ui/Icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    width="70px"
                    height="70px"
                    link={true}
                    linkTo="/"
                />
            </div>
            <div className="footer_discl">
                Marc Barrera. 2019
            </div>
            
        </footer>
    );
};

export default Footer;