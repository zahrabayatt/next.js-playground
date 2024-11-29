import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const UserDetailPage = async (props: Props) => {
  const { id } = await props.params;
  if (id > 10) {
    notFound();
  }

  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailPage;
