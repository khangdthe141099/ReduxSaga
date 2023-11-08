import { RootState } from "@/src/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  data: {
    name: string;
    company: string;
    role: string
  };
  isFetching: boolean;
  error: boolean;
}

// Define the initial state using that type
export const initialState: UserState = {
  data: {
    name: "Khang",
    company: "Harmony AT",
    role: "AI DEV"
  },
  isFetching: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchUserStart: (state, action) => {
      state.isFetching = true;
    },
    fetchUserSuccess: (state, action) => {
      state.isFetching = false;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.data = action.payload;
    },
    fetchUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } =
  userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
