import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import chessGameReducer from "./chessGame";
import chatInteractionReducer from "./chatInteraction";

const reducer = combineReducers({
  chessGameReducer,
  chatInteractionReducer,
});

const middleware = applyMiddleware(createLogger());

const store = createStore(reducer, middleware);

export default store;
export * from "./chessGame";
export * from "./chatInteraction";
