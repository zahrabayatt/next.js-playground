import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async (props: Props) => {
  const { sortOrder } = await props.searchParams;

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      {/* 
      in react 18, we have this new feature called suspense that we can use to show a fallback UI while a component is being rendered.

      On this page, we can wrap this user table inside a suspense component and show a fallback UI while this component is being rendered, while we are waiting for the UserTable component to fetch the data.

      we set the fallback prop to what we want to display while we are waiting for the user table to render. we can use a basic HTML element and say loading or we can set this to a component that renders a spinner or a skeleton.

      in dev tool go to component tab (if you don't have this tab, you have to install react dev tools) and search for suspense and click on that and on the right side, you can see this is not suspended, meaning the data is arrived and we have the final page rended But we can click on this timer icon to suspend this component And with this, if we go back to our page, we see the loading message. So this is a very useful technique to see what the user will experience while they're waiting for data.

      if you check the network tab in dev tool, you can see we got the users document that we got from the server. So this is the users page, and in the preview of this document we have the loading message. Now you might think that this is going to impact SEO because search engine bots are not going to see our data, they're not going to see the list of users. But this is not correct because this is what the client will initially see. So the server generates this page and sends it to the client, but it doesn't close the connection. So it doesn't terminate the request response lifecycle. It will then wait for the user table component to render, and then it will send additional data back to the client. This is called streaming. It's the same technology we have when streaming videos, audios and so on. So we can also stream HTML content. Okay, so this is how suspense works.
       */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;

// On a given page, we can have multiple suspense components or multiple suspense boundaries. But what if we want to put every page inside a suspense boundary? So as we navigate between our pages, we don't have to wait for the page to render. We initially see a loading message. Well, there are two ways to do this:

// 1- We can either go to our root layout component and wrap the children inside a suspense component. So here we have a suspense, and just like before, we set fallback to, for now, let's just add a paragraph and say "loading." With this, as we navigate between our pages, we should see the loading message. But it happens so quickly, that's why you don't see it.In more complex applications with heavier pages, adding that loading message will give the user a better experience.

// 2- In Next.js, we have another special file that we can put in our folders, that is a loading file. we can add a loading file. Again, the extension can be js, jsx, or tsx.In this loading component, we create and export a React component that should render when a page is being rendered.
