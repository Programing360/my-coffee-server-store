import React from 'react';
import cap from '../../assets/360_F_87154266_DNxcssUE1kYf1fkGB4aHzDmubIBCzMu2.jpg'
import batch from '../../assets/images.png'
import bean from '../../assets/bean.png'
import glass from '../../assets/cute-character-3d-image-giant-260nw-2500030937.webp'
const ItemList = () => {
    return (
        <div className='flex justify-center items-center gap-4 bg-[#ECEAE3] p-6 '>
            <div className='w-[300px] max-h-full'>
                <img className='w-[150px]' src={cap} alt="" />
                <h2 className="text-2xl font-serif">Awesome Aroma</h2>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='w-[300px]'>
                <img className='w-[150px] h-full' src={batch} alt="" />
                <h2 className="text-2xl font-serif">High Quality</h2>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='w-[300px]'>
                <img className='w-[180px]' src={bean} alt="" />
                <h2 className="text-2xl font-serif">Pure Grades</h2>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='w-[300px]'>
                <img className='w-[150px]' src={glass} alt="" />
                <h2 className="text-2xl font-serif">Proper Roasting</h2>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default ItemList;