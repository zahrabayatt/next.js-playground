"use client"; // client component can't be async
import dynamic from "next/dynamic";
import { useState } from "react";

// if we import HeavyComponent here, it will be included in the main bundle, so we should import it dynamically to lazy load it

// import HeavyComponent from "./components/HeavyComponent";

// dynamically import HeavyComponent
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}); // we pass a loader function and we can optionally pass a options object as second argument, in second argument we can pass a loading component to show while the component is being loaded. the other property that we have in the option argument is ssr, if we set it to false, the component will not be server side rendered, it will be rendered only on the client side. by default ssr is true and sometimes this can cause issues because if you access certain browser APIs on a server, perhaps they're not available, and you might end up getting errors. In those situations, you can disable pre-rendering on the server by setting `ssr` to false.

// we can also use lazy loading for external javascript libraries, for example if we want to use a library like lodash, we can import it dynamically like this in onClick handler where we need it.

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hello</h1>
      {/* we don't want to include this heavy component in js bundle of this component and make the bundle size huge, we want to show it only user click a button: */}
      {/* <HeavyComponent /> */}

      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}

      <button
        className="block"
        onClick={async () => {
          // dynamically import lodash
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
