import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import chessGameReducer from "./chessGame";
import chatInteractionReducer from "./chatInteraction";

const reducer = combineReducers({
  chessGame: chessGameReducer,
  chatInteraction: chatInteractionReducer,
});

const middleware = applyMiddleware(createLogger());

// Redux Store
export default createStore(reducer, middleware);

export * from "./chessGame";
export * from "./chatInteraction";
