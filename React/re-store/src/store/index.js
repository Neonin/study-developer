import { createStore, applyMiddleware } from 'redux'
import middlewareThunk from 'redux-thunk'

import reducer from './reducers'

const logMiddleware = () => (dispatch) => (action) => {
  console.log(action.type)

  return dispatch(action)
}

const stringEnhancer = (createStore) => (...args) => {
  const store = createStore(...args)
  const originalDispatch = store.dispatch
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return originalDispatch({
        type: action
      })
    }

    return originalDispatch(action)
  }

  return store
}

const store = createStore(reducer, applyMiddleware(middlewareThunk, logMiddleware))

store.dispatch('HELLO_WOLRD')

export default store