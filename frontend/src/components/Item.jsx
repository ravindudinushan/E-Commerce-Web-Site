import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
      <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
        <Link to={`product/${id}`}></Link>
        <img src={image} alt="productImage" />
      </div>
      <div>
        <h4>{name}</h4>
        <div>
            <div>{new_price}</div>
            <div>{old_price}</div>
        </div>
      </div>
    </div>
  )
}

export default Item
