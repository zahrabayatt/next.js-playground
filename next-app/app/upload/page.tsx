"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="kwynsrnk">
      {/* in CldUploadWidget use arrow function with braces and not without them ( () syntax), because the library doesn't support shorthand arrow functions for their child render functions properly. */}
      {({ open }) => {
        return (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadPage;
