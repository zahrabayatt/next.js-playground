import React from "react";

interface Props {
  params: { photoId: string }; // we can't named id because we used in UserDetailPage, and we need a new name for this id like photoId!
}
const PhotoPage = ({ params: { photoId } }: Props) => {
  return <div>Photo {photoId}</div>;
};

export default PhotoPage;
