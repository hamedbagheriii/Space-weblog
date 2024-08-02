import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from '../assets/images/space/logo.svg';
import { context } from '../context/context';


const Navbar = () => {
    const [navMode , setNavMode] = useState(false)
    const [title , setTitle] = useState('HOME')

    const {themeIMG , setThemeIMG} = useContext(context)


    const handleSetNavbar = (title)=>{
        setTitle(title)
        setNavMode(false)
        setThemeIMG(title)
    }

    return (
        <div className='navbar w-100 d-flex mt-4 justify-content-center'>
            <div className='w-100 row bg-dar'>
                <span className='col-12 d-lg-none d-flex text-center justify-content-center  py-2 text-white  mt-2 titleNav' onClick={()=>setNavMode(!navMode)}>
                    {title}
                </span>
                <div className="col-6 d-none d-lg-flex  align-items-center">
                    <img src={mainLogo} className='logo ms-4' />
                </div>
                <div className="col-12 col-lg-6 d-flex navbar_list justify-content-center align-items-start align-items-lg-start" style={navMode ? {height:230} : {height:0}}>
                    <ul className='list-unstyled d-flex navbar_UL flex-lg-row flex-column w-100 gap-4 gap-lg-3 mx-auto mt-3 px-2' style={navMode ? {height:230} : {height:0,overflow:'hidden'}}>
                        <li className='nav-li' onClick={()=>handleSetNavbar('HOME')}>
                            <NavLink to={'*'} className={({isActive})=>{return isActive ?  'nav-link p-0 text-white pb-4 border-3 border-bottom border-white' : 'nav-link p-0 text-white' }}>
                                00 HOME
                            </NavLink>
                        </li>
                        <li className='nav-li' onClick={()=>handleSetNavbar('DESTINATION')}>
                            <NavLink to={'/DESTINATION'} className={({isActive})=>{return isActive ?  'nav-link p-0 text-white pb-4 border-3 border-bottom border-white' : 'nav-link p-0 text-white' }}>
                                01 DESTINATION
                            </NavLink>
                        </li>
                        <li className='nav-li' onClick={()=>handleSetNavbar('CREW')}>
                            <NavLink to={'/CREW'} className={({isActive})=>{return isActive ?  'nav-link p-0 text-white pb-4 border-3 border-bottom border-white' : 'nav-link p-0 text-white' }}>
                                02 CREW
                            </NavLink>
                        </li>
                        <li className='nav-li' onClick={()=>handleSetNavbar('TECHNOLOGY')}>
                            <NavLink to={'/TECHNOLOGY'} className={({isActive})=>{return isActive ?  'nav-link p-0 text-white pb-4 border-3 border-bottom border-white' : 'nav-link p-0 text-white' }}>
                                03 TECHNOLOGY
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
