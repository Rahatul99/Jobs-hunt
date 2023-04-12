import './AppliedJob.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const AppliedJob = () => {
    const [cart, setCart] = useState([]);


    let appliedJob = {}
    const storedJob = localStorage.getItem('applied-job');
    if(storedJob){
        appliedJob = JSON.parse(storedJob);
    }
    const jobsAndStoredData = async() =>{
        const jobsData = await fetch('/jobs.json');
        const jobs = await jobsData.json();
        const savedJob = appliedJob;
    
        let jobArray = [];
    
        for(const id in savedJob){
            const foundJob = jobs.find(job => job.id === id);
            if(foundJob){
                foundJob.quantity = savedJob[id];
                jobArray.push(foundJob); 
            }
        }
        setCart(jobArray)
    }
    jobsAndStoredData()

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
                    <p className='font-semibold text-2xl'>Enforced Jobs</p>
                </div>
            </div>

            <div className='sort-data'>
                <form action='#'>
                    <label htmlFor="sort">
                    </label>
                    <select name='sort' id='sort'>
                        <option value="remote" onClick={() => remoteSort()}>Remote</option>
                        <br />
                        <option value="onsite">Onsite</option>
                    </select>
                </form>
            </div>



<div className='grid justify-center gap-5  mt-5 mb-5'>
{cart.map((job, index) => (<div key={index}
className='card card-side bg-base-100 shadow-xl p-5'
>
                <figure><img src={job.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job.designation}</h2>
                    <p>{job.company}</p>
                    <div className='flex gap-3'>
                        <button className='btn'>{job.jobType}</button> <button className='btn'>Full Time</button>
                    </div>
                    <div className='flex gap-5'>
                        <p className='flex flex-grow-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <small>{job.location}</small></p>
                        <p className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <small>Salary: {job.salary}</small></p>
                    </div>
                    <div className='btn justify-center'><Link to={`/jobDetails/${job.id}`}>View Details</Link></div>
                </div> 
</div>))}
</div>
            </div>
        </>
    );
};

export default AppliedJob;

