import { combineReducers } from "redux";
import markers from "./markers";
import properties from "./properties";
import auth from "./auth";


export default combineReducers({
    markers, properties, auth
});