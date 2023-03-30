import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { removeUser } from "../store/slice/UserSlice";
const DisplayUsers = () => {
  const dispatch = useDispatch();
  //with the help of state we can access all the slices in store
  const data = useSelector((state) => {
    return state.users;
  });
  // console.log(data);
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <div>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className=" btn-delete" onClick={() => deleteUser(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
