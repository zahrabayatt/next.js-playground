import React from "react";

interface Props {
  params: { slug: string[] };
  // to access query string parameters We use a different property called search prompts.
  // we set the searchParams to an object that can have one or more properties.
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}
    </div>
  );
  // for this url: http://localhost:3000/products?sortOrder=price
  // the sortOrder is price
};

export default ProductPage;
