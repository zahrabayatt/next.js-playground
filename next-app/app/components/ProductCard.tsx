import React from "react";
import AddToCard from "./AddToCard";

const ProductCard = () => {
  return (
    // tailwind css docs: https://tailwindcss.com/docs/installation
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600">
      <AddToCard />
    </div>
  );
};

export default ProductCard;
