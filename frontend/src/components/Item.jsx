import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <div>
      <div>
        <Link to={`product/${id}`}></Link>
      </div>
    </div>
  )
}

export default Item
