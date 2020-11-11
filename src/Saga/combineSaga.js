import { fork, all } from "redux-saga/effects";
import { GetWeatherRequest } from "./GetWeatherSaga";

function* watchAllSaga() {
  {
    yield all([fork(GetWeatherRequest)]);
  }
}

export default watchAllSaga;
