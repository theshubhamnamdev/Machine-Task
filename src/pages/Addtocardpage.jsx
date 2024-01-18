import React from 'react'
import ProductAdd from '../components/ProductAdd'

const Addtocardpage = () => {

  
  return (
    <>
    <h1 className='text-center p-5'>All Products</h1>
   <div className='container d-flex gap-5 justify-content-center align-items-center'>
   <ProductAdd/>
    <ProductAdd/>
     <ProductAdd/>
   </div>

    </>
  )
}

export default Addtocardpage