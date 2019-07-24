export default function reposReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_REPO":
      return [...action.payload.repos];
    default:
      return state;
  }
}
