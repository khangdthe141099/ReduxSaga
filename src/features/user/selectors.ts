import { RootState } from '@/src/store/store';
import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './userSlice';

const selectDomain = (state: RootState) => state.user || initialState

export const selectUser = createSelector(
    [selectDomain],
    userState => userState
)