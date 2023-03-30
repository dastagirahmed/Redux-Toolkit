import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("Deleted " + action.payload);
      state.splice(action.payload, 1);
    },
    deleteUser(state, action) {
      console.log("All Deleted");
      return [];
    },
  },
  // For Admin Slice
  extraReducers(builder) {
    builder.addCase(userSlice.actions.deleteUser, () => {
      return [];
    });
  },
});
console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUser } = userSlice.actions;
