export const FETCH_USER_ACTION = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";
export const FETCH_USER_START = "FETCH_USER_START"
const fetchUser = user => {
  return {
    type: FETCH_USER_ACTION,
    payload: {
      user
    }
  };
};
export const fetchUserFail = (message) => {
  return {
    type: FETCH_USER_FAIL,
    payload: {
      message
    }
  }
}

export const fetchUserStart = () => {
  return {
    type: FETCH_USER_START
  }
}
export default fetchUser;
