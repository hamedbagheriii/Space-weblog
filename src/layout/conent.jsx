import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../componenets/HOME/home';
import Destiantion from '../componenets/DESTINATION/destiantion';
import Crew from '../componenets/CREW/crew';
import Technology from '../componenets/TECHNOLOGY/Technology';

const Conent = () => {
    return (
        <div>
            <Routes>
                
                <Route path='/HOME' element={<Home/>} />

                <Route path='/DESTINATION' element={<Destiantion/>} />

                <Route path='/CREW' element={<Crew/>} />
                
                <Route path='/TECHNOLOGY' element={<Technology/>} />

                <Route path='*' element={<Home/>} />

            </Routes>
        </div>
    );
}

export default Conent;
