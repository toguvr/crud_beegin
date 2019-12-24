import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import campaign from './campaign'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    campaign,
  });
