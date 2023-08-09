// 리덕스 ssr을 위한 HYDRATE가있음.

import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// async action creator(비동기 엑션 크리에이터)
// action creator

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
    }
  },

  user,
  post,
});
export default rootReducer;
