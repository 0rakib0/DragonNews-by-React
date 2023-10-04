import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userDefaultPic from "../../../assets/user.png"
import { authContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {

    const { user, Logout } = useContext(authContext)

    const naviGet = useNavigate()

    const handleLogout = () =>{
        Logout()
        .then(() =>{
            naviGet('/')
        })
        .catch(error =>{
            alert('Something wrong!')
        })
    }

    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-14 mr-4 rounded-full">
                        {user && <img src={user.photoURL ? user.photoURL : userDefaultPic} />}
                    </div>
                </div>

                {
                    user ? <button onClick={handleLogout} className='btn btn-secondary'>Logout</button> :
                        <Link to="/login">
                            <button className='btn btn-secondary'>Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;