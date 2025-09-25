import React from 'react';
import { Link } from 'react-router';
import swal from 'sweetalert';
const ProductCreate = () => {

    const handleSubmitBtn = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const price = form.price.value
        const taste = form.taste.value
        const description = form.description.value
        const photo = form.photo.value
        const data = { name, supplier, category, price, taste, description, photo }
        console.log(data)
        fetch('http://localhost:3000/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "Your product has been created.",
                        icon: "success",
                        button: "Add Product",
                    });
                }
            })
    }





    return (
        <div>
            <Link to='/'>
                <button className='btn mt-4'>Back To Home</button>
            </Link>
            <div className=' bg-[#F4F3F0] p-8 w-[800px] mx-auto mt-20'>
                <div className='text-center'>
                    <h1 className="text-2xl">Add New Coffee</h1>
                    <p className='w-[500px] mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                </div>
                <div>
                    <div className='text-start p-20'>
                        <form onSubmit={handleSubmitBtn} className=''>
                            <div className='flex gap-6'>
                                <div>
                                    <div>
                                        <h2 className='mb-2'>Name</h2>
                                        <input type="text" name='name' placeholder="Enter coffee name" className="input input-lg" />
                                    </div>
                                    <div>
                                        <h2 className='mb-2'>Supplier</h2>
                                        <input type="text" name='supplier' placeholder="Enter coffee Supplier" className="input input-lg" />
                                    </div>
                                    <div>
                                        <h2 className='mb-2'>Category</h2>
                                        <input type="text" name='category' placeholder="Enter coffee Category" className="input input-lg" />
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <h2 className='mb-2'>Price</h2>
                                        <input type="text" name='price' placeholder="Enter coffee Price" className="input input-lg" />
                                    </div>
                                    <div>
                                        <h2 className='mb-2'>Taste</h2>
                                        <input type="text" name='taste' placeholder="Enter coffee Taste" className="input input-lg" />
                                    </div>
                                    <div>
                                        <h2 className='mb-2'>Description</h2>
                                        <input type="text" name='description' placeholder="Enter coffee Description" className="input input-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='mb-2 mx-auto'>Photo</h2>
                                <input type="text" name='photo' placeholder="Enter coffee Photo" className="input input-lg w-full" />
                            </div>
                            <button className='btn w-full text-center mt-4'>Add Coffee</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCreate;