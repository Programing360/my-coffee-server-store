
import { useLoaderData } from 'react-router';
import ProductSee from './ProductSee';

const MainSection = () => {
    const allProductsLoad = useLoaderData()
    // const {coffee, setCoffee} = useState(allProductsLoad)
    // console.log(coffee)
    return (
        <div className='my-40'>
            <h1>{allProductsLoad.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto w-11/12'>
                {
                    allProductsLoad.map(product => <ProductSee key={product._id} coffeeProduct={product}></ProductSee>)
                }
            </div>
        </div>
    );
};

export default MainSection;