const dummyUser = {
  id: 1,
  nickname: "sirri",
  Posts: [],
  Followings: [],
  Followers: [],
};
export const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginDate: {},
  },
};

export const loginAction = () => {
  return {
    type: "LOG_IN",
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,

        isLoggedIn: true,
        user: action.data,
      };

    case "LOG_OUT":
      return {
        ...state,

        isLoggedIn: false,
        user: null,
      };
  }
};

export default reducer;
