import React from "react";
import AddToCard from "./AddToCard";
// you can import styles from module css and named whatever you want it but it's better to called styles
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // we have intellisense for styles object
    <div className={styles.cardContainer}>
      <AddToCard />
    </div>
  );
};

export default ProductCard;

// if you inspect the class name in source code in dev tool you see it is not ProductCard , it's ProductCard_card_KLyHh and it's auto generated, so what is happening here is that next.js uses a tool called post CSS for transforming our CSS class names.
// the post CSS config file is postcss.config.mjs. in this file we have two two plugins, one is tailwind, the other is autoprefixer.
// Now for the most part, we don't have to touch this configuration file, but if you're an advanced post CSS user, you know this is where you can provide your custom configuration. So when building our application, next JS uses post CSS to transform our class names and generate unique class names that don't clash.

// we can group the css and tsx files in folders like ProductCard file.
