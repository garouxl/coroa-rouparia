import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

import './cart.styles.scss'

const Cart = () => (
  <div className='cart'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default Cart
