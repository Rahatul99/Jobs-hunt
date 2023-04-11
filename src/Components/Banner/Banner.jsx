import React, { useContext, useEffect, useState } from 'react';
import banner from '../../assets/All Images/Banner.png';
import Featured from '../Featured/Featured';
import Category from '../Category/Category';
import { JobsContext } from '../../App';
import Header from '../Header/Header';

const Banner = () => {
    const jobs = useContext(JobsContext);

    const [categories, setCategory] = useState([]);
    useEffect(() => {
           fetch('category.json')
          .then(response => response.json())
          .then(data => setCategory(data))
      }, []);
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl mt-5 md:flex-row flex-col">
                <div className="card-body mt-20 mb-0">
                    <h2 className="card-title font-extrabold md:text-6xl text-3xl">Unlock Your Career <br /> Potential,Discover Your</h2>
                    <h2 className='text-blue-300 font-extrabold md:text-6xl text-3xl'>Dream Job Today!</h2>
                    <p className='pt-5 flex-grow-0'>Explore thousands of job opportunities with all the information you need.<br />Its your future. Come find it. Manage all your job application from start to finish.</p>
                    {/* <button className="btn btn-primary">Watch</button> */}
                    <div className="justify-start">
                    <button className="btn btn-primary rounded-md bg-violet-400 text-white">Take Tour</button>
                    </div>
                </div>
                <div><img src={banner} alt="Banner"/></div>
            </div>



            <div className='mt-10'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl '>Entry-Level Positions Available</h1>
                    <p className='pt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center gap-3 pt-5'>
                {
                    categories.map(category => <Category category={category} key={category.id} />)
                }
                </div>   
            </div>




            <div className="grid md:grid-cols-2 justify-items-center gap-5 mt-5 mb-5">
                {
                    jobs.map(job => <Featured job={job} key={job.id} />)
                }
            </div>

            
        </>
    );
};

export default Banner;