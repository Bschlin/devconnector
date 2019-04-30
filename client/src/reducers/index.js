import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import post from './post';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post
});
