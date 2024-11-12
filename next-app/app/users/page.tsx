import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  // const res = await fetch("http://jsonplaceholder.typicode.com/users", {
  //   next: { revalidate: 10 },
  // });
  // disable caching:
  const res = await fetch("http://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* // Timestamp Example: A timestamp showing when the page was rendered is added to the users page. During development, the timestamp updates with each page refresh. */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;

// In Next.js, there is a performance optimization technique called static rendering (or static site generation). The idea behind static rendering is that for pages or components with static data, Next.js can render them once during the build process for production. This means that when those pages or components are needed again, Next.js won't re-render them; instead, it will retrieve their content from its cache, which is stored on the file system.

// Static rendering happens at build time, as opposed to dynamic rendering, which occurs at request time.

// In Next.js, when static rendering is used, pages are built once at build time and served from the cache during requests. This results in fast, cached pages. Here's a demonstration:

// Timestamp Example: A timestamp showing when the page was rendered is added to the users page. During development, the timestamp updates with each page refresh.

// Development Mode: In development mode, the timestamp changes because Next.js re-renders the page on each refresh, as the page is dynamically generated.

// Production Build: When the app is built using npm run build, Next.js treats the page as static and renders it only once during build time. As a result, the timestamp no longer updates upon refresh.

// Disabling Caching: To prevent Next.js from treating the data as static, caching is disabled by setting cache: "no-store". This forces Next.js to dynamically render the page at request time.

// Static vs Dynamic Rendering:

// Without caching (cache: "no-store"), Next.js will dynamically render the page at runtime, shown by the lambda (λ) icon.
// With caching enabled, the page is statically rendered and served from the file system cache, indicated by a circle (●).
// Rebuilding for Production: After disabling caching and rebuilding the application, refreshing the page causes the timestamp to update because Next.js now performs server-side rendering at runtime, not static rendering.

// This example highlights the flexibility of Next.js in deciding between static and dynamic rendering based on caching configuration.

// npm run dev - run application in development
// npm run build - build application for production
// npm start - run application in production

// Conclusion:
// In Next.js, rendering can happen on the client or on the server.
// If it happens on the server, it can happen at build time, which is called static rendering, or at request time, which is called dynamic rendering.
