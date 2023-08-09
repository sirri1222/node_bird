import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";
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

// async action creator(비동기 엑션 크리에이터)
// action creator

// (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
  }
};

export default rootReducer;
