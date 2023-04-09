import React from 'react';
import iconA from '../../assets/Icons/accounts 1.png'

const Category = () => {
    return (
        <>
            <div className='mt-5'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl '>Job Category List</h1>
                    <p className='pt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex md:flex-row flex-col items-center justify-center gap-3 pt-5'>
                    <div className="card w-60 bg-violet-100 text-primary-content">
                        <div className='p-5'><img src={iconA} className='max-w-[15%] bg-violet-300 p-2 rounded-md' alt="" /></div>
                        <div className="card-body p-3">
                            <h2 className="card-title">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-violet-100 text-primary-content">
                        <div className='p-5'><img src={iconA} className='max-w-[15%] bg-violet-300 p-2 rounded-md' alt="" /></div>
                        <div className="card-body p-3">
                            <h2 className="card-title">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-violet-100 text-primary-content">
                        <div className='p-5'><img src={iconA} className='max-w-[15%] bg-violet-300 p-2 rounded-md' alt="" /></div>
                        <div className="card-body p-3">
                            <h2 className="card-title">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                    <div className="card w-60 bg-violet-100 text-primary-content">
                        <div className='p-5'><img src={iconA} className='max-w-[15%] bg-violet-300 p-2 rounded-md' alt="" /></div>
                        <div className="card-body p-3">
                            <h2 className="card-title">Account & Finance</h2>
                            <p>300 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;