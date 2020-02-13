import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

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
      <span>Total: {total} dinheiros</span>
    </div>
    <div className='test-warning'>
      <p>
        &#9995; Use os dados abaixo para finalizar a compra &#9996; <br />
        <strong>4485 5500 8076 7429 - Exp: 09/20 - CVV: 847</strong>
      </p>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
