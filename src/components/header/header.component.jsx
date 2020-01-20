import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart/cart.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser
          ? <div className='option' onClick={() => auth.signOut()}>SIGN-OUT</div>
          : <Link className='option' to='/signin'>SIGN-IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden
        ? null
        : <Cart />
    }
  </div>
)

// state aqui é o top level root reducer
const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden }
}) => ({
  currentUser,
  hidden
})

// o HOC connect é executado e traz o root-reducer( o state param de mapStateToProps ), então executado novamente com o componente que ira usa-lo
export default connect(mapStateToProps)(Header)
