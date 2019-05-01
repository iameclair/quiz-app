import {combineReducers} from "redux";
import {Reducers} from "./index";

const rootReducer = combineReducers({
    reports:Reducers.reportReducer
});
export default rootReducer;