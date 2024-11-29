import React from "react";

interface Props {
  params: Promise<{ photoId: number }>;
}
const PhotoPage = async (props: Props) => {
  const { photoId } = await props.params;

  return <div>Photo {photoId}</div>;
};

export default PhotoPage;
