import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest } from "redux-saga/effects";
import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
} from "./userSlice";

export function* handleFetchUser(action: PayloadAction<any>) {
  const requestURL = "/login";

  try {
    //Response return a promise:
    // const response: any[] = yield call(request, requestURL, action.payload);

    // yield put(loginSuccess(response));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = { ...action.payload };

    yield put(fetchUserSuccess(response));
  } catch (err: any) {
    yield put(fetchUserFailure());
  }
}

export function* userSaga() {
  yield takeLatest(fetchUserStart.type, handleFetchUser);
}
