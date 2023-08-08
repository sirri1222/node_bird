import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginDate: {},
  },
  post: {
    mainPosts: [],
  },
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};
// async action creator(비동기 엑션 크리에이터)
// action creator

store.dispatch();
// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };

    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      };

    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
