import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

import ChatList from './ChatList';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar1 from '../../../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../../../assets/images/user/avatar-3.jpg';

const NavRight = ({handleLogout}) => {
    return(
        <section className='hero'>
            <nav>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
        
    )
}


export default NavRight;
