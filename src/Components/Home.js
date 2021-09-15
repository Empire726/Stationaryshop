import React from 'react'
import { Products } from './Products'
import Card from './ScrollCard';
// import About from './About';
import Categrey from './TotalProduct/Categrey';
import Menu from './TotalProduct/Menu';
import Cara from './Carasoual/Carasoul';

export const Home = () => {

    return (
        <div className='wrapper'>
            <Cara/>
            <Card/>
            <Products />  
            <Categrey/>
            {/* <About/> */}
            <Menu />
        </div>
    )
}
