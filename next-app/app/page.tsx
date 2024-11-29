import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

// in next .js, we have a built-in router that is based on the file system, So in the app folder We can create folders that represent our URL segments like users/new.
// to make a route publicly accessible we have to put a special page file in that folder which page file is one of the special files that next.js router looks for.
// only special files in router are publicly accessible.

// special files in next.js router:
// page.tsx
// layout.tsx: It's for defining a common layout for our pages
// loading.tsx: It's for showing loading UIs.
// route.tsx: It's for creating APIs
// not-found.tsx: It's for showing UI when the notFound function is thrown within a route segment
// error.tsx: It's for showing general custom error pages
