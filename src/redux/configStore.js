import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import post from "./modules/post";
import user from "./modules/user";
import comment from "./modules/comment";
import { connectRouter } from "connected-react-router";
const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({
  post,
  user,
  comment,
  router: connectRouter(history),
});
const store = createStore(rootReducer, enhancer);

export { history };
export default store;