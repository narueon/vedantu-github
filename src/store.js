import allReducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
const arr = []
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
if(devTools !== null){
  arr.push(devTools)
}
const  allExtras =  compose(applyMiddleware(thunk),...arr)
export const store = createStore(
    allReducers,
    {
      repos: [],
      user: {}
    },allExtras
    
  );
