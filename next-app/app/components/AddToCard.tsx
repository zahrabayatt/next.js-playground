"use client";
import React from "react";

const AddToCard = () => {
  // button daisyUI: https://daisyui.com/components/button/
  return (
    <button className="btn btn-primary" onClick={() => console.log("Adding")}>
      Add
    </button>
  );
};

export default AddToCard;
