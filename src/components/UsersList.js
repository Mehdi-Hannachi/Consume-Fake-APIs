import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const UsersList = ({ searchText }) => {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);

  return loading ? (
    <h1>wait....</h1>
  ) : (
    <div style={{ margin: "100px 12%" }}>
      <h1
        style={{ textAlign: "center", color: "rgb(204, 133, 0)" }}
      >{`<i>Will of B</i>`}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {users &&
          users
            .filter((el) =>
              el.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((user) => <UserCard user={user} key={user.id} />)}
      </div>
    </div>
  );
};

export default UsersList;
