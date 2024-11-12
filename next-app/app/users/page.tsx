import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // In a Next.js server component, we can use the familiar fetch function to retrieve data directly on the server. The fetch function, which is natively available in browsers, allows us to send HTTP requests to a backend, enabling data fetching to happen server-side before sending the response to the client. This helps optimize performance, reduce client-side workload, and improve SEO.
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
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

// In Next.js, data can be fetched on either the client or the server.

// Client-Side Fetching:

// Typically uses state and effect hooks (or React Query as an alternative) to retrieve data and store it in a state variable.
// Challenges:
// - Increased Bundle Size: More components are sent to the client, slowing down page load times.
// - Higher Resource Usage: Rendering on the client requires more resources.
// - SEO Limitations: Search engines might not index content loaded on the client.
// - Security Risks: Sensitive data like API keys can end up on the client side.
// - Extra Round-Trip: After loading HTML, CSS, and JS, the browser makes an additional request to fetch data.

// Server-side data fetching in Next.js helps address these issues by loading data before sending it to the client.
