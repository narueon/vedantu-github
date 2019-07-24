export const FETCH_USER_ACTION = "FETCH_USER";

const fetchUser = user => {
  return {
    type: FETCH_USER_ACTION,
    payload: {
      user
    }
  };
};

export default fetchUser;
