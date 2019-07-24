const FETCH_REPO_ACTION = "FETCH_REPO";
const fetchRepo = repos => {
  return {
    type: FETCH_REPO_ACTION,
    payload: {
      repos
    }
  };
};
export const fetchRepoAPI = () => {
  return dispatch => {
    fetch("https://api.github.com/users/supreetsingh247/repos")
      .then(resp => resp.json())
      .then(data => {
        // console.log('got_data from api', data)
        dispatch(fetchRepo(data));
      });
  };
};
export default fetchRepo;
