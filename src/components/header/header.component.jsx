import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>COMPRE</OptionLink>
      <OptionLink to='/shop'>CONTATO</OptionLink>
      {
        currentUser
          ? <OptionLink as='div' onClick={() => auth.signOut()}>SAIR</OptionLink>
          : <OptionLink to='/signin'>ENTRAR</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden
        ? null
        : <CartDropdown />
    }
  </HeaderContainer>
)

// state aqui é o top level root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

// o HOC connect é executado e traz o root-reducer( o state param de mapStateToProps ), então executado novamente com o componente que ira usa-lo
export default connect(mapStateToProps)(Header)
