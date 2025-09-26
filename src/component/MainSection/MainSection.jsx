
import { useLoaderData } from 'react-router';
import ProductSee from './ProductSee';
import { useState } from 'react';



const MainSection = () => {
    const allProductsLoad = useLoaderData()
    // const {coffee, setCoffee} = useState(allProductsLoad)
    const [coffee, setCoffee] = useState(allProductsLoad)
    // console.log(coffee)

    return (
        <div className='my-28'>
            <h1 className="text-2xl text-center mb-4 font-bold">Product View</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto w-full '>
                {
                    coffee.map(product => <ProductSee key={product._id} coffeeProduct={product} coffee={coffee} setCoffee={setCoffee} ></ProductSee>)
                }
            </div>
        </div>
    );
};

export default MainSection;