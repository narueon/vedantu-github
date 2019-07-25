import {FETCH_REPO_ACTION, FETCH_REPO_FAIL} from '../actions/repo-action'
export default function reposReducer(state = [], action) {
  switch (action.type) {
    case FETCH_REPO_ACTION:
      return {
        ...state,
        repos: [...action.payload.repos],
        loading: false
      };
    case FETCH_REPO_FAIL:
      return {
        ...state,
        error: action.message,
        loading: false
      }
    default:
      return state;
  }
}
