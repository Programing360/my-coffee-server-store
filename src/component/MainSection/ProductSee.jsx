import React from 'react';
import { FaEye } from 'react-icons/fa';
import { IoPencilSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router';
import swal from 'sweetalert';
const ProductSee = ({ coffeeProduct,setCoffee,coffee }) => {
    console.log(coffeeProduct)
    const { photo, name, taste, supplier, price, description, _id } = coffeeProduct

    const handledelete = (id) => {
        console.log(id)

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                console.log(willDelete)
                if(willDelete === true){
                     fetch(`http://localhost:3000/product/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            const remainig  = coffee.filter(p => p._id !== id)
                            setCoffee(remainig)
                        }

                    })
                }
               
                if (willDelete) {
                    swal("Poof! Your coffee Product has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your coffee product is safe!");
                }
            });
    }
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <h2 className="text-lg font-semibold">Price: {price}$</h2>
                    </div>
                    <div className='flex justify-between items-center'>

                        <div>
                            <p>Supplier: {supplier}</p>
                            <p>Taste: {taste}</p>
                            <p>{description}</p>
                        </div>
                        <div className=''>
                            <Link><FaEye className='text-2xl mb-3 hover:bg-blue-300 rounded-2xl'></FaEye></Link>
                            <Link to={`/product/${_id}`}><IoPencilSharp className='text-2xl mb-3  hover:bg-blue-300 rounded-2xl'></IoPencilSharp></Link>
                            <button onClick={() => handledelete(_id)}><MdDelete className='text-2xl  hover:bg-blue-300 rounded-2xl'></MdDelete></button>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSee;