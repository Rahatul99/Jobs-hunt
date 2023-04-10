import React from 'react';

const Category = ({category}) => {
    const {title, picture, jobs} = category;
    return (
        <>
            <div className="card w-60 bg-violet-100 text-primary-content">
                <div className='p-5'><img src={picture} className='max-w-[15%] bg-violet-300 p-2 rounded-md' alt="" /></div>
                <div className="card-body p-3">
                <h2 className="card-title">{title}</h2>
                <p>{jobs}</p>
                </div>
            </div>
        </>
    );
};

export default Category;
