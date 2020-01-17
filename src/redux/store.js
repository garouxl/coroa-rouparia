import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

const middleWares = [
  logger
]

const store = createStore(
  rootReducer,
  // o metodo composeWithDevTool serve somente para o redux devtools funcionar
  composeWithDevTools(
    applyMiddleware(...middleWares)
  )
)

export default store
