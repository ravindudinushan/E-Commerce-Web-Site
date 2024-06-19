import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import {useParams} from 'react-router-dom'
import ProductHd from '../components/ProductHd';

const Product = () => {

  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId))
  if(!product){
    return <div>product not found!</div>
  }

  return (
    <section>
      <div>
        <ProductHd product={product}/>
      </div>
    </section>
  )
}

export default Product
