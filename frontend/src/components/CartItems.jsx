import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {TbTrash} from 'react-icons/tb'

const CartItems = () => {

const {all_products, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <section className='max_padd-container pt-28'>
        <table className='w-full mx-auto'>
            <thead>
                <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
                    <th className='p-1 py-2'>Products</th>
                    <th className='p-1 py-2'>Title</th>
                    <th className='p-1 py-2'>Price</th>
                    <th className='p-1 py-2'>Quantity</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className='p-1 py-2'>Remove</th>
                </tr>
            </thead>
            <tbody>
                {all_products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <tr key={e.id} className='border-b border-slate-900/20 text-gray-30 p-6 medium-14 text-center'>
                            <td className='flexCenter'><img src={e.image} alt="prdctImg" height={43} width={43} className='rounded-lg ring-1 ring-slate-900/5 my-1'/></td>
                            <td><div className='line-clamp-3'>{e.name}</div></td>
                            <td>${e.new_price}</td>
                            <td className='w-16 h-16 bg-white'>{cartItems[e.id]}</td>
                            <td>${e.new_price * cartItems[e.id]}</td>
                            <td>
                                <div className='bold-22 pl-14'><TbTrash onClick={() => removeFromCart(e.id)}/></div>
                            </td>
                        </tr>
                    }
                    return null;
                })}
            </tbody>
        </table>
        {/* cart details */}
        <div>
            <div>
                <h4>Summary</h4>
                <div>
                    <div>
                        <h4>Subtotal:</h4>
                        <h4>${0}</h4>
                    </div>
                    <hr />
                    <div>
                        <h4>Shipping Fee:</h4>
                        <h4>Free</h4>
                    </div>
                    <hr />
                    <div>
                        <h4>Total:</h4>
                        <h4>${0}</h4>
                    </div>
                </div>
                <button>Checkout</button>
                <div>
                    <h4>Your coupon code enter here:</h4>
                    <div>
                        <input type="text" placeholder='Coupon code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItems