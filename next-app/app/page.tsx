import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <a href="/users">Users</a> */}
      <Link href="/users">Users</Link>
    </main>
  );
}

// In Next.js, routing is based on the file system, meaning the structure of files and folders in the "app" directory determines the accessible routes. To create a route, you add a new folder (e.g., users) in the app directory, and within it, include a file named page (with the extension .js, .jsx, or .tsx for TypeScript). Naming this file as page in lowercase is essential because Next.js relies on naming conventions rather than configuration. Inside this page file, you export a React component, which will render when users visit the corresponding route (e.g., /users). This file-based, convention-driven system simplifies routing by eliminating the need for additional configuration.

// The naming of the component within the page file doesn’t affect routing in Next.js. it’s purely for organizing our code more effectively.

// In Next.js's new app routing system, only files named page (and other special files like layout, error, etc.) within a folder are accessible as routes. If you add other files, such as test.css, in the same folder, they won’t be accessible via a route (e.g., /users/test.css). Attempting to access such a file results in a "not found" page. This differs from the older pages router, where any file added to a folder would be publicly accessible as part of the route structure. This new approach enhances security and keeps route access strictly limited to designated files.

// To create nested routes in Next.js, you can add folders within existing ones. For example, inside the users folder, you can create a new folder, then add a page.tsx file there. By exporting a React component (e.g., NewUserPage), you create a route accessible at /users/new. This way, Next.js automatically generates a nested route structure based on the folder hierarchy.

// To implement optimal navigation in Next.js, avoid using standard anchor (<a>) tags, as they trigger full page reloads, re-downloading all resources, including fonts, CSS, and JavaScript. This is inefficient, especially when common layout elements like navigation bars remain the same. Instead, use the Next.js <Link> component from next/link, which enables client-side navigation. This way, only the content area is replaced without reloading other resources, resulting in faster, smoother transitions between pages.
