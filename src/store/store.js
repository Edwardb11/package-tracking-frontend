import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducer/authReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
   auth:authReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);