// to use onClick and browser event and useRouter hook, we need to use it in client component
"use client";
// for app router make sure to import it fro next/navigation not next/router becasue it is used for old version ,pages router, not the new version ,app router,
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
