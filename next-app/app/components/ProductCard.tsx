// "use client"; // convert entire component to solve this runtime error
import React from "react";
import AddToCard from "./AddToCard";

const ProductCard = () => {
  return (
    <div>
      {/* we got the runtime error because it is server side component */}
      {/* <button onClick={() => console.log("Adding")}>Add</button> */}
      {/* use a component for this part and make it client side component to solve this runtime error */}
      <AddToCard />
    </div>
  );
};

export default ProductCard;
