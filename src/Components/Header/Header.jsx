import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink to='/performance' className={({ isActive }) => (isActive ? 'bg-blue-500' : 'bg-white')}>Performance</NavLink></li>
                    <li><NavLink to='/enforced' className={({ isActive }) => (isActive ? 'bg-blue-500' : '')}>Enforced Jobs</NavLink></li>
                    <li><NavLink to='/journal' className={({ isActive }) => (isActive ? 'bg-blue-500' : '')}>Journal</NavLink></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">JOBS HUNT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/performance' className={({ isActive }) => (isActive ? 'bg-blue-500' : 'bg-white')}>Performance</NavLink></li>
                    <li><NavLink to='/enforced' className={({ isActive }) => (isActive ? 'bg-blue-500' : '')}>Enforced Jobs</NavLink></li>
                    <li><NavLink to='/journal' className={({ isActive }) => (isActive ? 'bg-blue-500' : '')}>Journal</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn rounded-md bg-violet-400 border-none text-white">HOME</a>
                </div>
            </div>
            <Banner />
        </div>
    );
};

export default Header;