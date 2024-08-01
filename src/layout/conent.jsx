import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../componenets/HOME/home';

const Conent = () => {
    return (
        <div>
            <Routes>
                
                <Route path='*' element={<Home/>} />

                <Route path='/DESTINATION' element={<ss/>} />

                <Route path='/CREW' element={<ss/>} />
                
                <Route path='/TECHNOLOGY' element={<ss/>} />

            </Routes>
        </div>
    );
}

export default Conent;
