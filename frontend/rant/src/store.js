import { createStore } from 'redux'

export function configureStore() {
 return createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
};
export const store = configureStore()