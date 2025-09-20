import React from 'react';
import icon from '../../assets/logo1 1.jpg'
const NavBar = () => {
    return (
        <div>
            <div className='md:w-full flex items-center justify-center py-2 bg-[#3d09099e]'>
                <img className='w-6' src={icon} alt="" />
                <span className='text-white text-2xl'>Espresso Emporium</span>
            </div>
        </div>
    );
};

export default NavBar;