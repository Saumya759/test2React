import { takeLatest, put, call } from "redux-saga/effects";
import {
  GetWeatherSuccess,
  GetWeatherError,
} from "../Redux/createActions/createActions";
import * as actions from "../Redux/actionTypes/actionTypes";
import axios from "axios";

export function* GetWeatherSaga(action) {
  try {
    let city = action.payload.city;
    let country = action.payload.country;
    let response = yield call(
      axios.get,
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}`
    );
    let data = response.data;
    if (data.error === 0) {
      yield put(GetWeatherSuccess({ response: { data: data } }));
    } else {
      yield put(GetWeatherError({ error: data }));
    }
  } catch (error) {
    yield put(GetWeatherRequest({ error: error }));
  }
}

export function* GetWeatherRequest() {
  yield takeLatest(actions.Get_Weather_Request, GetWeatherSaga);
}
