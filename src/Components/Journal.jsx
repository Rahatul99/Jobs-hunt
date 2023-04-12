import React from 'react';
import Header from './Header/Header';
import { Link, NavLink } from 'react-router-dom';

const Journal = () => {
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
                    <Link to={"/"} className="btn rounded-md bg-violet-400 border-none text-white">HOME</Link>
                </div>
            </div>




            <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='font-extrabold text-xl'>When should i use context api</h1>
                </div>
                <div className="collapse-content">
                    <p>When i have a lot of props being passed down the component tree: If i have a lot of props being passed down through multiple levels of components, using the Context API can help simplify my code and make it easier to manage.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='font-extrabold text-xl'>What is custom hook</h1>
                </div>
                <div className="collapse-content">
                    <p>A React custom hook is a reusable piece of code that uses one or more of React's built-in hooks to provide some functionality that can be shared across multiple components in application.
                    Custom hooks are created by defining a function that starts with the word "use" and utilizes one or more of the built-in hooks such as useState, useEffect, or useContext, as well as potentially other custom hooks.
                    ***
                    To use a custom hook,simply call it like any other hook within functional component. This helps keep code DRY (Don't Repeat Yourself) and can make it easier to maintain over time.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='font-extrabold text-xl'>What is useRef, usage of useRef. what is useMemo?</h1>
                </div>
                <div className="collapse-content">
                    <p>the useRef hook is a way to create a mutable reference to a value that persists across component renders and can be used to access and manipulate DOM elements or other mutable values in a functional component without triggering a re-render.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='font-extrabold text-xl'>What is useMemo?</h1>
                </div>
                <div className="collapse-content">
                    <p>The basic idea behind useMemo is that it will only recompute a memoized value when one of its dependencies has changed. This means that if the dependencies of the memoized value have not changed, React will return the previously calculated value, rather than recomputing it.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Journal;