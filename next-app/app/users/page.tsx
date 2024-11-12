import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // When calling the fetch function in Next.js, we can pass a second argument as an options object. In this object, setting cache to "no-store" disables caching, which is useful when we want to display fresh data that updates frequently.
  // const res = await fetch("http://jsonplaceholder.typicode.com/users", { cache: "no-store"});

  // Another option is to keep data fresh for a specified period. Instead of cache: "no-store", we can set next to an object and specify parameters specific to Next.js. For instance, setting revalidate to 10 tells Next.js to refresh data every 10 seconds by running a background job to get updated data from the backend. This is how caching and data revalidation work in Next.js.
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  // It's important to note that this caching behavior is only implemented in the fetch function in Next.js. If you use a third-party library like Axios, you won't get the automatic data caching provided by Next.js.

  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;

// Fetching data in server components has the added benefit of caching. Caching means storing data in a faster-access location, such as memory, the file system, or the network, with access speed decreasing as you go down this list. For example, retrieving data from the network is slower than from the file system.

// Next.js includes a built-in data cache. When we use the fetch function to get data, Next.js automatically stores the result in a file system-based cache. On subsequent requests for the same data, Next.js retrieves it from the cache rather than re-fetching it, making data access quicker.

// Next.js also gives developers control over caching behavior. If data changes frequently, caching can be disabled or configured so that cached data is treated as fresh for a specified time.
