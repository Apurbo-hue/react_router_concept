import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
            <h3>This is the footer component <br></br>
            thank you for visiting us
            <NavLink to="/hello">Facebook</NavLink>
            </h3>
        </div>
    );
};

export default Footer;