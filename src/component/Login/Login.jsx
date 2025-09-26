import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
    const {userLogin,setUser,user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const email = formData.get('email')
        const password = formData.get('password')
        console.log(email,password)
        userLogin(email, password)
        .then(result => {
            console.log(result.user)
            if(result.user){
                navigate('/')
                setUser(true)
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login</h1>
                </div>
                <div className="card bg-base-100 shrink-0 shadow-2xl">
                    <div className="card-body p-8 w-full">
                        <form onSubmit={handleLogin} className="fieldset w-[200px]">
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='password' placeholder="Password" />
                            <div className='flex items-center justify-between gap-14'>
                                <a className="link link-hover ">Forgot password?</a>
                                <p className='hover:text-amber-600 hover:font-bold'><Link to='/signIn' >Sign Up</Link></p>
                            </div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            {
                                user === false ? <p className='text-red-500'>Something is Wrong</p> : <p>User Login Successful</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;