import { getStoredJob } from "../Utilities/fakeDB";

const jobsAndStoredData = async() =>{
    const jobsData = await fetch('jobs.json');
    const jobs = await jobsData.json();
    const savedJob = getStoredJob();

    let jobArray = [];

    for(const id in savedJob){
        const foundJob = jobs.find(job => job.id === id);
        if(foundJob){
            foundJob.quantity = savedJob[id];
            jobArray.push(foundJob); 
        }
    }
    return { jobArray, jobs}
}

export default jobsAndStoredData;