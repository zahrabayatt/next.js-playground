// spell this file and function correctly, this is one of the convention that next.js is looking for

// import { NextRequest, NextResponse } from "next/server";

// this is just for demo and not for production to see how next-auth protected routes and in this code this production is for all paths but we only want to executed for certain paths and to do that we use a middleware in next.js:

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// import middleware from "next-auth/middleware";
// export default middleware;

// shorter syntax:
export { default } from "next-auth/middleware";

// config is one of the conventions in next.js
export const config = {
  // we can use parameter in path: /users/:id
  // we can also use these:
  // *: zero or more --> /users/:id* /users/*
  // +: one or more --> /users/:id+
  // ?: zero or one --> /users/:id?

  // these are paths that we want to be protected
  matcher: ["/users", "/products"],
};
