import React from "react";
import UserTable from "./userTable";

const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      {/* this component is only used in this route so we don't need to place it in general components folder and it makes more sense to located in this users folder */}
      <UserTable />
    </>
  );
};

export default UsersPage;
