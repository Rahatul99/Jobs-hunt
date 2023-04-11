// import React, { useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';

// const JobDetails = () => {
//     const [job, setJob] = useState({})
//     const { id } = useParams();
//     const jobs = useLoaderData();
//     console.log(data)
//     console.log(id)
//     return (
//         <div>
//             <h2>Hello from job detail</h2>
//         </div>
//     );
// };

// export default JobDetails;


import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();
    console.log(id)
    const jobs = useLoaderData();
    console.log(jobs)

    useEffect(() => {
        const getJob = async () => {
            const foundJob = jobs.find(job => job.id === id);
            setJob(foundJob);
        };
        getJob();
    }, []);
    console.log('main',job)

    return (
        <div>
            <h2>{job.designation}</h2>
             <p>{job.company}</p>
            {/* add other job details */}
        </div>
    );
};

export default JobDetails;

