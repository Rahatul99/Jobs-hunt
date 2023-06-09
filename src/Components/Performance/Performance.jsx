import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Performance.css';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const Performance = () => {
    const data = [
        {
          name: "Assignment 1",
          marks: 58
        },
        {
          name: "Assignment 2",
          marks: 57
        },
        {
          name: "Assignment 3",
          marks: 58
        },
        {
          name: "Assignment 4",
          marks: 53
        },
        {
          name: "Assignment 5",
          marks: 58
        },
        {
          name: "Assignment 6",
          marks: 60
      
        },
        {
          name: "Assignment 7",
          marks: 60
        },
        {
          name: "Assignment 8",
          marks: 60
        }
      ];
    return (
        <>
        <div>
            <div className='nav-container bg-blue-100'>
                <div className="navbar h-20">
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
                        {/* <a className="btn rounded-md bg-violet-400 border-none text-white">HOME</a> */}
                        <Link to={"/"} className="btn rounded-md bg-violet-400 border-none text-white">HOME</Link>
                    </div>
                </div>
                <div className='text-center p-5'>
                    <p className='font-semibold text-2xl'>Performance</p>
                </div>
            </div>
        </div>

    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="marks" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="marks" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="marks" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
        </>
    );
};

export default Performance;