import { startRequest, userLoaded, endRequest, openAvatar } from "./actions";

const testAPIUrl = "https://reqres.in/api/users/2";

export const getUserData = () => (dispatch, getState) => {
  dispatch(startRequest());
  fetch(testAPIUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { data: dataObject } = data;
      dispatch(userLoaded(dataObject));
      dispatch(endRequest());
      const state = getState();
      dispatch(openAvatar(state.users[0].avatar));
    })
    .catch((error) => {
      dispatch(endRequest());
      console.error(error);
    });
};
