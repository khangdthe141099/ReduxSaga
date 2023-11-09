import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUserFailure,
  fetchUserStart,
  fetchUserSuccess,
  createUserStart,
  createUserSuccess,
  createUserFailure,
} from "./userSlice";
import { createUser, getUserDetail } from "../../services/user";

export function* handleFetchUser(action: PayloadAction<any>) {
  const requestURL = "https://654c7a7b77200d6ba858e560.mockapi.io/api/v1/user";

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: any[] = yield call(getUserDetail, requestURL);

    yield put(fetchUserSuccess(response));
  } catch (err: any) {
    yield put(fetchUserFailure());
  }
}

export function* handleCreateUser(action: PayloadAction<any>) {
  const requestURL = "https://654c7a7b77200d6ba858e560.mockapi.io/api/v1/user";

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response: any[] = yield call(createUser, requestURL, action.payload);

    yield put(createUserSuccess(response));
  } catch (err: any) {
    yield put(createUserFailure());
  }
}

export function* userSaga() {
  yield takeLatest(fetchUserStart.type, handleFetchUser);
  yield takeLatest(createUserStart.type, handleCreateUser);
}
