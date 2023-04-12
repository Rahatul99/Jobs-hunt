import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilities/fakeDB';


const JobDetails = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const jobs = useLoaderData();

    useEffect(() => {
        const getJob = async () => {
            const foundJob = jobs.find(job => job.id === id);
            setJob(foundJob);
        };
        getJob();
    }, []);
    if(!job.id){
        return null
    }
    const {description, responsibility, requirements, experiences, mail, phone, salary, designation, location} = job;

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
                        <Link to={"/"} className="btn rounded-md bg-violet-400 border-none text-white">HOME</Link>
                        </div>
                    </div>
                    <div className='text-center p-5'>
                        <p className='font-semibold text-2xl'>Job Details</p>
                    </div>
                </div>
            </div>



            <div className='flex mt-10 justify-center gap-5'>
                <div className='w-[60%]'>
                    <div>
                        <span className='font-extrabold'>Job Description: </span>
                        <span>{description}</span>
                    </div>
                    <div className='pt-5'>
                        <span className='font-extrabold'>Job Responsibility: </span>
                        <span>{responsibility}</span>
                    </div>
                    <div className='pt-5'>
                        <p className='font-extrabold'>Educational Requirements: </p>
                        <span>{requirements}</span>
                    </div>
                    <div className='pt-5'>
                        <p className='font-extrabold'>Experiences: </p>
                        <span>{experiences}</span>
                    </div>
                </div>
                <div className="">
                    <div className="p-4 w-[100%] bg-base-100 text-base-content bg-slate-300">
                        <h2 className='text-stone-950 font-bold text-center'>Job Details</h2>
                        <hr className='mt-5 mb-5 bg-slate-600'/>
                        <div className='flex'><span className='font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 pt-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Salary:</p></span> <span className='pl-1'>{salary}</span></div>

                        <div className='flex'><span className='font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <p>Job Title:</p></span> <span className='pl-1'>{designation}</span></div>
                        <h2 className='text-stone-950 font-bold text-center pt-5'>Contact Information</h2>
                        <hr className='mt-5 mb-5 bg-slate-600'/>

                        <div className='flex'><span className='font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <p>Phone:</p></span> <span className='pl-1'>{phone}</span></div>

                        <div className='flex'><span className='font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p>Email:</p></span> <span className='pl-1'>{mail}</span></div>

                        <div className='flex'><span className='font-semibold flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p>Location:</p></span> <span className='pl-1'>{location}</span></div>

                    </div>
                    <button onClick={() =>addToDb(id)} className="btn p-4 w-80 bg-violet-500 rounded text-base-content mt-5 text-white">
                    Apply Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;

