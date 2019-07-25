import {FETCH_USER_ACTION,FETCH_USER_FAIL,FETCH_USER_START} from '../actions/user-action'
export default function userReducer(state = {}, action) {
  // console.log(action)
  if (action.type === FETCH_USER_ACTION) {
    console.log(action)
    return { 
      ...state,
      user: action.payload.user,
      loading: false
     };
  } else if(action.type === FETCH_USER_FAIL){
    return {
      ...state,
      message: action.payload.message,
      loading: false
    }
  } else if(action.type === FETCH_USER_START){
    return {
      ...state,
      loading: true
    }
  }
  return state;
}
