import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const UserInformation = () => {
    const {setUserInfo} = useContext(AuthContext)
    const data = useLoaderData()
    useEffect(() => {
        
    },[])
    setUserInfo(data)
    console.log(data)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Email</th>
                        <th>Phone</th>
                       <Link to='/'><th>Home</th></Link>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data.map(user => <tr key={user._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={user.photo ? user.photo :"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.Name}</div>
                                        <div className="text-sm opacity-50">{user.address}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                            </td>
                            <td>{user.email}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{user.phone}</button>
                            </th>
                            <div>
                                <button className='btn'>X</button>
                                <button className='btn'>U</button>
                                <button className='btn'>D</button>
                            </div>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default UserInformation;