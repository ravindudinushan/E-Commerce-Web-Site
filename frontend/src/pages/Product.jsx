import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import useParems from 'react-router-dom'
import ProductHd from '../components/ProductHd';

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParems();
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <section>
      <div>
        <ProductHd/>
      </div>
    </section>
  )
}

export default Product
