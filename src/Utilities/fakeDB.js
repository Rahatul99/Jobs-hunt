import { json } from "react-router-dom";


const addToDb = id =>{
    let appliedJob = {};
    
    const storedJob = localStorage.getItem('applied-job');
    if(storedJob){
        appliedJob = JSON.parse(storedJob);
    }
    const quantity = appliedJob[id];
    if(quantity){
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    else{
        appliedJob[id] = 1;
    }

    localStorage.setItem('applied-job', JSON.stringify(appliedJob))

}

const getStoredJob = () =>{
    let appliedJob = {}
    const storedJob = localStorage.getItem('applied-job');
    if(storedJob){
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob
}
 
const removeFromDb = id =>{
    const storedJob = localStorage.getItem('applied-job');
    if(storedJob){
        const appliedJob = JSON.parse(storedJob);
        if(id in storedJob){
            delete appliedJob[id];
            localStorage.setItem('applied-job', JSON.stringify(storedJob))
        }
    }
}

const deleteStoredJob = () => localStorage.removeItem('shopping-cart')

export { addToDb, getStoredJob, removeFromDb, deleteStoredJob }