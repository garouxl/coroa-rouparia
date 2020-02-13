import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'><span>Produto</span></div>
      <div className='header-block'><span>Descrição</span></div>
      <div className='header-block'><span>Quantidade</span></div>
      <div className='header-block'><span>Preço</span></div>
      <div className='header-block'><span>Remova</span></div>
    </div>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className='total'>
      <span>Total: ${total}</span>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
