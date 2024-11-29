import React from "react";

interface Props {
  params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
  return <div>ProductPage {slug}</div>;
  // for this route: /products/grocery/dairy/milk , slug is grocerydairymilk
};

export default ProductPage;

// we want to build a page to show all our products, So we can implement a route like this:
// /grocery
// /grocery/dairy
// /grocery/dairy/milk
// so we have varying number of parameters. to implement this, we are not going to create so many nested folders, there's a better way. we create a dynamic route with slug pamperer which is array of string like this [...slug] folder.
// we call it slug because it can contain a url slug like grocery, dairy, milk and so on. to make this except varying to make this except varying prefix it with dot dot dot.

// we call this type of dynamic route, catch-all segments: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments

// to make a dynamic route optional we wrapped on double bracket so we named the folder of this page to [[...slug]]: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
// with is we can also go to products route : /products
