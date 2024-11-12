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

// side (CSR) and server-side (SSR).

// Client-Side Rendering (CSR): Components are bundled and sent to the client, where they are rendered in the browser, similar to traditional React applications. This approach requires more resources on the client, as the bundle size grows with the application. It can negatively affect performance and SEO since search engines struggle to index content rendered via JavaScript, and sensitive data may be exposed in the client bundle.

// Server-Side Rendering (SSR): Components are rendered on the server, so only the essential markup and assets are sent to the client. This minimizes the bundle size, enhances SEO, and keeps sensitive data secure on the server. However, server components lack interactivity—they can't handle browser events, access browser APIs, or manage state, which are features only available to client components.

// In practical applications, Next.js allows using a combination of both. Server components are preferred by default for better performance and SEO, while client components are used selectively when interactivity or client-specific functionality is required. This balance provides an optimized and secure application with interactive capabilities where necessary.

// For example, on a product listing page, we can keep components like the navbar and product list server-rendered. For interactive elements like the "Add to Cart" button, instead of making the entire product card a client component, we can extract just the button into a small client component, minimizing client-side JavaScript while keeping other parts server-rendered.

// In Next.js, all components inside the app folder default to server components, meaning they render on the server. When you load the page, the HTML document is served from the backend, which is beneficial for SEO since search engine bots can see the content directly.

// However, server components cannot handle interactivity (like onClick or onChange events). If you need interactivity, you can convert the specific interactive parts into client components by adding the use client directive at the top of those files. Alternatively, you can split interactive elements, like buttons, into their own client components, keeping the rest as server-rendered. This approach keeps the bundle size minimal by only loading necessary client-side JavaScript.
