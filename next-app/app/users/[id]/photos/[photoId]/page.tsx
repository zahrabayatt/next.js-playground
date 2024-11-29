import React from "react";

interface Props {
  params: { photoId: number };
}
const PhotoPage = ({ params: { photoId } }: Props) => {
  return <div>Photo {photoId}</div>;
};

export default PhotoPage;
