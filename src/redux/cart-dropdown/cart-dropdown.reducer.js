import CartDropdownActionTypes from './cart-dropdown.types'

const INITIAL_STATE = {
  hidden: true
}

const CartDropdownReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartDropdownActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export default CartDropdownReducer
