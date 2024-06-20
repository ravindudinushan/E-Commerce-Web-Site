import React from 'react'
import product_rt_1 from '../assets/product_rt_1.png'
import product_rt_2 from '../assets/product_rt_2.png'
import product_rt_3 from '../assets/product_rt_3.png'
import product_rt_4 from '../assets/product_rt_4.png'
import {MdStar} from 'react-icons/md'

const ProductDisplay = (props) => {

const {product} = props;

  return (
    <section>
        <div>
            {/* left side */}
            <div>
                <div>
                    <img src={product_rt_1} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_2} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_3} alt="prdctImg" className='max-h-[99px]'/>
                    <img src={product_rt_4} alt="prdctImg" className='max-h-[99px]'/>
                </div>
                <div>
                    <img src={product.image} alt="" />
                </div>
            </div>
            {/* right side */}
            <div>
                <h3>{product.name}</h3>
                <div>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <p>(111)</p>
                </div>
                <div>
                    <div>{product.old_price}</div>
                    <div>{product.new_price}</div>
                </div>
                <div>
                    <h4>Select Size:</h4>
                    <div>
                        <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>S</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay
