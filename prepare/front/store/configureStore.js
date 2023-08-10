import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { createWrapper } from "next-redux-wrapper";
// import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware([]))
      : compose(applyMiddleware([]));
  const store = createStore(reducer, enhancer);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
