import React from 'react'
import {TbArrowRight} from 'react-icons/tb'

const ProductHd = (props) => {

    const {product} = props;

  return (
    <div>
      Home <TbArrowRight/> Shop <TbArrowRight/> {product.category} <TbArrowRight/> {product.name}
    </div>
  )
}

export default ProductHd
