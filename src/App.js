import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { context } from './context/context';


const App = ()=>{
    const [themeIMG , setThemeIMG] = useState('HOME')
    

    return (
        <BrowserRouter>
            <context.Provider value={{themeIMG , setThemeIMG}}>
                <div className={` app ${()=>{}}`}>
                    <Layout/>
                </div>
            </context.Provider>
        </BrowserRouter>
    ) 
}


export default App;