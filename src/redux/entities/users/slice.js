import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) =>
      entityAdapter.setAll(state, payload)
    ),
});

const selectUsersSlice = (state) => state.usersSlice;

export const { selectById: selectUserById, selectTotal: selectUsersTotal } =
  entityAdapter.getSelectors(selectUsersSlice);
