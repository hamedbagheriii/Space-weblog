import React, { useContext } from 'react';
import Navbar from './navbar';
import Conent from './conent';
import { context } from '../context/context';

const Layout = ()=>{
    const {themeIMG} = useContext(context)




    return(
        <div className={`layout d-flex flex-column ${themeIMG}`}>
            <Navbar/>
            <Conent/>
        </div>
    )
}

export default Layout