export const FETCH_REPO_ACTION = "FETCH_REPO";
export const FETCH_REPO_FAIL = "FETCH_REPO_FAIL"
const fetchRepo = repos => {
  return {
    type: FETCH_REPO_ACTION,
    payload: {
      repos
    }
  };
};
export const fetchRepoFail = (message) => {
  return {
    type: FETCH_REPO_FAIL,
    payload: {
      message
    }
  }
}
export const fetchRepoAPI = () => {
  return dispatch => {
    fetch("https://api.github.com/users/supreetsingh247/repos")
      .then(resp => {
        if(!resp.ok){
          return new Error(resp.statusText)
        }
        return resp.json()
      })
      .then(data => {
        // console.log('got_data from api', data)
        dispatch(fetchRepo(data));
      }).catch(error=>{
        dispatch(fetchRepoFail(error))
      })
  };
};
export default fetchRepo;
