import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../componenets/HOME/home';
import Destiantion from '../componenets/DESTINATION/destiantion';

const Conent = () => {
    return (
        <div>
            <Routes>
                
                <Route path='/HOME' element={<Home/>} />

                <Route path='/DESTINATION' element={<Destiantion/>} />

                <Route path='/CREW' element={<ss/>} />
                
                <Route path='/TECHNOLOGY' element={<ss/>} />

                <Route path='*' element={<Home/>} />

            </Routes>
        </div>
    );
}

export default Conent;
