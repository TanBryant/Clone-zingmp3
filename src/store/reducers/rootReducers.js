import appReducer from "./appReducers";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    app: appReducer,
});

export default rootReducers;
