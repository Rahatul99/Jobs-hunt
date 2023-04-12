import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Featured = ({job}) => {
    // const [showAll, setShowAll] = useState(false);
    // const toggleShowAll = () => {
    //     setShowAll(!showAll);
    // };
    const {img, designation, company, salary, id, jobType, location} = job;

    return (
        <>
            <div className='card min-w-0 h-[100%] w-[80%] bg-base-100 shadow-xl p-5'>
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{designation}</h2>
                    <p>{company}</p>
                    <div className='flex gap-3'>
                        <button className='btn'>{jobType}</button> <button className='btn'>Full Time</button>
                    </div>
                    <div className='md:flex flex-row'>
                        <p className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <small>{location}</small></p>
                        <p className='flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <small>Salary: {salary}</small></p>
                    </div>
                    <Link to={`/jobDetails/${id}`}>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary rounded-sm w-[40%] min-h-0 h-10 bg-violet-400 text-white border-none">View Details
                            </button>
                        </div>    
                    </Link>
                    </div>
                </div>   
        </>
    );
};

export default Featured;