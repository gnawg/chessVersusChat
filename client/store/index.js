import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import chessGameReducer from "./chessGame";
import chatInteractionReducer from "./chatInteraction";

const reducer = combineReducers({
  chessGame: chessGameReducer,
  chatInteraction: chatInteractionReducer,
});

const middleware = applyMiddleware(thunkMiddleware, createLogger());

// Redux Store
export default createStore(reducer, middleware);

export * from "./chessGame";
export * from "./chatInteraction";
