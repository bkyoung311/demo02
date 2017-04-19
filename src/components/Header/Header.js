import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className= 'header'>
            <Link to ='/' className='title'> ABCancer </Link>
        </div>
    );
};

export default Header;