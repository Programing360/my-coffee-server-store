import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const SignIN = () => {

    const { signInUser } = useContext(AuthContext)
    // console.log(data)

    const handleSignInBtn = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { password, ...others } = Object.fromEntries(formData.entries())
        const email = formData.get('email')
        // const passsword = formData.get('password')
        console.log(password, email)
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    form.reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Sign up successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    fetch('http://localhost:3000/signIn', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(others)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In!</h1>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                    <div className="card-body p-8 w-full">
                        <form onSubmit={handleSignInBtn} className="fieldset w-[200px]">
                            <label className="label">Name</label>
                            <input type="text" className="input" name='Name' placeholder="name" />
                            <label className="label">Address</label>
                            <input type="text" className="input" name='address' placeholder="address" />
                            <label className="label">phone</label>
                            <input type="text" className="input" name='phone' placeholder="Phone Number" />
                            <label className="label">photo</label>
                            <input type="text" className="input" name='photo' placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div className='flex items-center justify-between gap-14'>
                                <a className="link link-hover ">Forgot password?</a>
                                <p className='hover:text-amber-600 hover:font-bold'><Link to='/login' >Login</Link></p>
                            </div>
                            <button className="btn btn-neutral mt-4">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIN;