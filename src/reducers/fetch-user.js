export default function userReducer(state = {}, action) {
  // console.log(action)
  if (action.type === "FETCH_USER") {
    return { ...action.payload.user };
  }
  return state;
}
