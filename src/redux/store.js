import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'

const middleWares = [
  logger
]

export const store = createStore(
  rootReducer,
  // o metodo composeWithDevTool serve somente para o redux devtools funcionar
  composeWithDevTools(
    applyMiddleware(...middleWares)
  )
)

export const persistor = persistStore(store)
