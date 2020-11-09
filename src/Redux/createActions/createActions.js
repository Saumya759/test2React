import { createAction } from "redux-actions";
import * as actions from "../actionTypes/actionTypes";

export const GetWeatherRequest = createAction(actions.Get_Weather_Request);
export const GetWeatherSuccess = createAction(actions.Get_Weather_Success);
export const GetWeatherError = createAction(actions.Get_Weather_Error);

