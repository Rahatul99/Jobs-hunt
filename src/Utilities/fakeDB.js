import { json } from "react-router-dom";


// add data local store
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

// remove a specific element from loacl storage 
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

//clear all data from local storage
const deleteStoredJob = () => localStorage.removeItem('shopping-cart')

export { addToDb, getStoredJob, removeFromDb, deleteStoredJob }