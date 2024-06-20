import React from 'react'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'

const ProductDisplay = () => {
  return (
    <section>
        <div>
            <div>
                <div>
                    <img src={product_rt_1} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_2} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_3} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_4} alt="prdctImg" className='max-h-[99px]'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay
