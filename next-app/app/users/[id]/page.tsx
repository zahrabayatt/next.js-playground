import React from "react";

interface Props {
  params: { id: string }; // this only work at page level, if we need to user id in component in this page, we need to pass the id to the component.
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailPage;

// a dynamic route is a route with a parameter.
