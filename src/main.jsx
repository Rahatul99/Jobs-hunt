import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Performance from './Components/Performance/Performance';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import jobsAndStoredData from './Loaders/jobsAndStoredData';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: jobsAndStoredData,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "performance",
        element: <Performance />
      },
      {
        path: "enforced",
        element: <AppliedJob />
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: ({params}) => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
