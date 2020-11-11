import { combineReducers } from "redux";
import GetWeatherReducer from "./GetWeatherReducer";

const rootReducer = combineReducers({
  GetWeatherstatus: GetWeatherReducer,
});

export default rootReducer;
