import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import CartDropdownReducer from './cart-dropdown/cart-dropdown.reducer'

export default combineReducers({
  user: userReducer,
  cartDropdown: CartDropdownReducer
})
