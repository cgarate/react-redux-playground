export const initialStore = {
  ui: { loadingUser: false },
  users: [],
  horoscopes: [],
  weather: [],
};

const usersReducer = (usersState = [], action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      const {
        payload: { id, email, first_name, last_name, avatar },
      } = action;
      return [...usersState, { id, email, first_name, last_name, avatar }];

    case "USER_LOADED":
      const { payload } = action;
      return [...usersState, payload]

    default:
      return usersState;
  }
};

const uiReducer = (uiState = initialStore.ui, action) => {
  switch (action.type) {
    case "REQUEST_START":
      return { ...initialStore.ui, loadingUser: true };
    case "REQUEST_END":
      return { ...initialStore.ui, loadingUser: false };
    default:
      return uiState;
  }
};

const rootReducer = (state = initialStore, action) => {
  return {
    users: usersReducer(state.users, action),
    ui: uiReducer(state.ui, action),
  };
};

export default rootReducer;
