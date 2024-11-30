// to create an API endpoint for getting a collection of objects, we add a new folder called api in the app folder. this is not required, but it's a very common convention to follow the other api. we also can have various endpoint like users posts and so on.

import { NextRequest, NextResponse } from "next/server";

// so api like routes use file system configuration and so far the endpoint of api is /api, now we create a users folder and the endpoint become /api/users

// in given url segment or given folder we can either have a page file or a route file but not both if we want to show something to the user or if you want to return markup or HTML content, we use a page file, but otherwise if you want to handle HTTP requests, we should add a route file.

// in the route file, we create one or more route handlers. a route handler is a function that handles an HTTP request. HTTP requests have various methods:
// GET - getting data
// POST - creating data
// PUT - updating data

// we can remove the request parameter because it is not used but then the next.js cache this api, to prevent this caching we add this parameter.
export function GET(request: NextRequest) {
  // return NextResponse.json("Hello");
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}
