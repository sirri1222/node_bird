import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from "redux";
import { createWrapper } from "next-redux-wrapper";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
    // 배열을 스프레드해서 넣음 
      ? compose(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
