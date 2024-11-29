// this component should be client component.
"use client";
import React from "react";

// next.js automatically pass error object and reset function to this component.
interface Props {
  error: Error;
  reset: () => void; // sometimes our errors are temporary, so in certain parts of our application, we may want to give the user the chance to retry. to do that we use reset function
}

const ErrorPage = ({ error, reset }: Props) => {
  // we should logged using logger system like sentry: https://sentry.io/welcome/
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occurred. </div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;

// in this file we can not capture errors that happened in root layout and to capture errors in this file we need to create another special file called global-error.tsx in root layout directory.
