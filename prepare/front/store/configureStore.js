import { legacy_createStore as createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

const configureStore = () => {
  const store = createStore(reducer);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
