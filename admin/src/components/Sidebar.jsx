import React from 'react'
import { Link } from 'react-router-dom'
import addProduct from '../assets/addproduct.png'
import ListProduct from '../assets/productlist.png'

const Sidebar = () => {
  return (
    <div className='py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col 
    lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
      <Link to={'/addproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-14 w-44 medium-16'>
            <img src={addProduct} alt="" height={55} width={55}/>
            <span>Add Product</span>
        </button>
      </Link>
      <Link to={'/listproduct'}>
        <button className='flexCenter gap-2 rounded-md bg-primary h-14 w-44 medium-16'>
            <img src={ListProduct} alt="" height={55} width={55}/>
            <span>Product List</span>
        </button>
      </Link>
    </div>
  )
}

export default Sidebar
