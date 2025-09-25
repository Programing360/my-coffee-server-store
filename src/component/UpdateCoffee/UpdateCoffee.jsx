import React from 'react';
// const Swal = require('sweetalert2')
import { Link, useLoaderData } from 'react-router';
import swal from 'sweetalert2'

const UpdateCoffee = () => {
    const { _id, name, price, description, photo, taste, supplier, category } = useLoaderData()
    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        // const coffeeData = Object.fromEntries(formData.entries)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        fetch(`http://localhost:3000/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas)
                
                if (datas.modifiedCount) {
                    
                    swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div>
            <div>
                <Link to='/'><button className='btn m-7 hover:bg-emerald-300 hover:text-white'>Back Home</button></Link>
            </div>
            <div className=' p-12 border-2 text-center mx-30'>

                <div>
                    <h1 className="text-2xl">Update Existing Coffee Details</h1>
                </div>
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-2 justify-center gap-6 mt-4'>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">name</label>
                            <input type="text" className="input w-full" name='name' defaultValue={name} placeholder="name " />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Price</label>
                            <input type="text" className="input w-full" name='price' defaultValue={price} placeholder="Price name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Supplier</label>
                            <input type="text" className="input w-full" name='supplier' defaultValue={supplier} placeholder="supplier name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Taste</label>
                            <input type="text" className="input w-full" name='teste' defaultValue={taste} placeholder="taste name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">Category</label>
                            <input type="text" className="input w-full" name='category' defaultValue={category} placeholder="category name" />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label">description</label>
                            <input type="text" className="input w-full" name='description' defaultValue={description} placeholder="description name" />
                        </fieldset>

                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box mt-6 border p-4">
                        <label className="label">Photo</label>
                        <input type="text" className="input w-full" name='photo' defaultValue={photo} placeholder="Photo name" />
                    </fieldset>
                    <input type="submit" className='w-full btn mt-6' value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;