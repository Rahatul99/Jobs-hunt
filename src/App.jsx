import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
// import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react';

export const JobsContext = createContext([]);
export const CartContext = createContext([]);

const App = ()=> {
  const {cartArray, jobs} = useLoaderData();
  const [cart, setCart] = useState(cartArray);

  return (
    <>
      <JobsContext.Provider value={jobs}>
        <CartContext.Provider value={[cart, setCart]}>
          <div className="min-h-[calc(100vh-137px)]">
            <Outlet /> 
          </div>
          <Footer />
        </CartContext.Provider>
      </JobsContext.Provider>
    </>
  )
}

export default App
