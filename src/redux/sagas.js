import { put, takeEvery, all, call } from "redux-saga/effects";
import { openAvatar } from "./actions";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* openWindow() {
  yield call(delay, 1000);
  put(openAvatar("https://www.clik2pay.com"));
}

function* watchOpenWindow() {
  yield takeEvery("SAGA_OPEN_WINDOW", openWindow);
}

export default function* rootSaga() {
  yield all([watchOpenWindow()]);
}
