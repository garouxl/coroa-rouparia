import React from 'react'
import { connect } from 'react-redux'

import { toggleCartDropdownHidden } from '../../redux/cart-dropdown/cart-dropdown.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartDropdownHidden }) => (
  <div className='cart-icon' onClick={toggleCartDropdownHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(CartIcon)
