export const setUserData = () => ({
  type: "SET_USER_DATA",
  payload: {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "jdoe@example.com",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
});

export const userLoaded = (userData) => ({
  type: "USER_LOADED",
  payload: userData,
});

export const startRequest = () => ({
  type: "REQUEST_START",
});

export const endRequest = () => ({
  type: "REQUEST_END",
});

export const openAvatar = (url) => {
  window.open(url);
  return {type: "OPEN_AVATAR"}
};
