import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'
import CartReducer from './cart/cart.reducer'
// combineReducers isar retornar o state que é usado nos maps dentro dos componentes atraves do connect()
export default combineReducers({
  user: userReducer,
  cart: CartReducer
})
