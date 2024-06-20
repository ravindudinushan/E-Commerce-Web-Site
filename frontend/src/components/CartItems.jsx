import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartItems = () => {

const {all_products, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <section>
        <table>
            <thead>
                <tr>
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
                        return <tr key={e.id}>
                            <td><img src={e.image} alt="prdctImg" height={43} width={43}/></td>
                            <td><div>{e.name}</div></td>
                            <td>{e.new_price}</td>
                            <td>{e.old_price}</td>
                        </tr>
                    }
                })}
            </tbody>
        </table>
    </section>
  )
}

export default CartItems
