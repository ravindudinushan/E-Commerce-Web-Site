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
        <div className='flex flex-col gap-14 xl:flex-row'>
            {/* left side */}
            <div className='flex gap-x-2'>
                <div className='flex flex-col gap-[7px] flex-wrap'>
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
            <div className='flex-col flex'>
                <h3 className='h3'>{product.name}</h3>
                <div className='flex gap-x-2 text-secondary medium-22'>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <p>(111)</p>
                </div>
                <div className='flex gap-x-6 medium-20 my-4'>
                    <div>{product.old_price}</div>
                    <div>{product.new_price}</div>
                </div>
                <div className='mb-4'>
                    <h4 className='bold-16'>Select Size:</h4>
                    <div className='flex gap-3 my-3'>
                        <div className='ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer'>S</div>
                        <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>M</div>
                        <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>L</div>
                        <div className='ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer'>XL</div>
                    </div>
                    <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                        <button className='btn_dark_outline !rounded-none uppercase regular-16 tracking-widest'>Add to cart</button>
                        <button className='btn_dark_rounded !rounded-none uppercase regular-16 tracking-widest'>Buy it now</button>
                    </div>
                    <p><span className='medium-16 text-tertiary'>Category :</span> Women | Jacket | Winter</p>
                    <p><span className='medium-16 text-tertiary'>Tags :</span> Modern | Latest</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay
