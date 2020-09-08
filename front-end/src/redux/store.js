import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./userReducer";
import promiseMiddleware from "redux-promise-middleware";
import episodesReducer from "./episodesReducer";

const rootReducer = combineReducers({
  user: userReducer,
  episodes: episodesReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
