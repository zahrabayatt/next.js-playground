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

// Next.js Link component: (we used it for navigation)

// 1- it only downloads the content of the target page.
// because this component of this page is server component in network tab we only see a request to get this page and we're not going to get the navigation bar, we're not going to get any other files like CSS and JavaScript files, only the content of the users page. in dev mode, for this component we see two requests because this is one of the features in react 18 that called strict mode, which is enabled by default to detected errors. for this component request we have the ?_rsc=611qw query string parameter, which rsc is short for react server component. So when we go to this page, the browser sends this request to the backend to retrieve the content of the users page, which is a react server component.

// 2- it prefetches the links that are in the viewport.
// to see this in action, we need to start our application in production and refresh the users page, in the network tab in dev tool, in the requests we have two two requests for fetching users and sort them by name and email because on this page we have links pointing to these URLs, so Next .js tries to prefetch these pages ahead of time to improve performance.

// 3- as we navigate in our application, Next .js stores the payload of our pages in a cache on the client.
// So next time we go to a page that we have seen before, Next .js is not going to make a request to the backend, it's going to pull out that page from its client cache.
// To see this in action, we're back on the users page, look what happens if we go to the home page. So the home page was prefetched and cached on the client, so now if we clear the log and go to the home page, look there are no requests sent to the backend, because we have the content of this page on the client cache. Now, this client cache only exists for one session and clears when we do a full page reload. So if we do a full page reload, the client cache is cleared.
