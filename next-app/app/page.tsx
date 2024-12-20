"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hello</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}

      <button
        className="block"
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [
            { id: 1, name: "John" },
            { id: 2, name: "Doe" },
            { id: 3, name: "Jane" },
            { id: 4, name: "Aria" },
          ];

          const sortedUsers = _.orderBy(users, "name");

          console.log(sortedUsers);
        }}
      >
        Log Users
      </button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
