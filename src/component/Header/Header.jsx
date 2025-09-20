import React from 'react';
import banner from '../../assets/Rectangle 2.jpg'
const Header = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img src={banner} alt="photo" />
            </div>
            <div className='md:container md:mx-auto absolute md:top-50 md:left-[400px] lg:left-[700px] top-14 left-40 max-w-60 text-white md:w-[500px]'>
                <h1 className="text-[12px] md:text-3xl">Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-[10px] md:text-lg'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    <button className='btn mt-3'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default Header;