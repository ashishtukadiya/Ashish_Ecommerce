import { createStore } from "redux";
import { createStoreHook } from "react-redux";
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;