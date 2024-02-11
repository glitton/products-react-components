/* eslint-disable react/prop-types */
import React from "react";
import PhotoIndex from "./PhotoIndex";
import StarRating from "./StarRating";

function ProductDetails({ product }) {
  return (
    <article className='product-details'>
      <div className='photos-wrapper'>
        <PhotoIndex photos={product.photos} />
      </div>
      <div className='product-info'>
        <h1>{product.title}</h1>
        <StarRating rating={product.rating} />
        <p className='product-description'>{product.description}</p>
      </div>
    </article>
  );
}

export default ProductDetails;
