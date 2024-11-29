import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const userTable = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default userTable;
