import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slice/UserSlice";
export const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteUser());
  };
  return (
    <div>
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
};
