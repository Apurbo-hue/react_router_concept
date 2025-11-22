import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';
import '../css/all.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
           <div className='flex_items'>
             <Sidebar></Sidebar>
             <Outlet></Outlet>         
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;