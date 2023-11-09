import { RootState } from "@/src/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  data: any;
  isFetching: boolean;
  error: boolean;
  isSuccessed: boolean;
}

// Define the initial state using that type
export const initialState: UserState = {
  data: [
    {
      name: "name 1",
      age: 86,
      address: "Anaheim",
      id: "1",
    },
  ],
  isFetching: false,
  error: false,
  isSuccessed: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.isFetching = true;
      state.isSuccessed = false;
    },
    fetchUserSuccess: (state, action) => {
      state.isFetching = false;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.data = action.payload;
      state.isSuccessed = true;
    },
    fetchUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isSuccessed = false;
    },
    createUserStart: (state, action) => {
      state.isFetching = true;
      state.isSuccessed = false;
    },
    createUserSuccess: (state, action) => {
      state.isFetching = false;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.data = [...state.data, action.payload];
      state.isSuccessed = true;
    },
    createUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.isSuccessed = false;
    },
  },
});

export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  createUserFailure,
  createUserStart,
  createUserSuccess,
} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
