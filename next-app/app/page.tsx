import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
// };

// In some pages, typically pages that have route or query string parameters, we need to generate the metadata dynamically. For example, we might have a page for showing a product. On that page, our metadata will be dependent on the product that we're going to show. To do that, instead of exporting a metadata object, we export an async function called `generateMetadata`. make sure to spell it right because Next.js will look for this function to generate the metadata:

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetchProduct();
//   return {
//     title: product.name,
//     description: product.description,
//   };
// }
