import ProductCard from "./components/ProductCard";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user?.name}</span>}</h1>
      {/* use custom fonts as tailwinds variables */}
      <h2 className="font-poppins">Hi</h2>
      <h2 className="font-geistSans">Hi</h2>
      <h2 className="font-geistMono">Hi</h2>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
