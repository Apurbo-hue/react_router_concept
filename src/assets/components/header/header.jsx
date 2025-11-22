import React from 'react';
import { Link, NavLink } from 'react-router';
import '../css/header.css'

const Header = () => {
    return (
        <div>
            <h3>This is the header</h3>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/laptops">Laptops</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default Header;