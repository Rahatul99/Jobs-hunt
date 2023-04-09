import React from 'react';
import banner from '../../assets/All Images/Banner.png';
import Featured from '../Featured/Featured';
import Category from '../Category/Category';

const Banner = () => {
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

            <div>
                <Category />
            </div>
            <div className='m-10'>
                <Featured></Featured>
            </div>
        </>
    );
};

export default Banner;