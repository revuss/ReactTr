// Products.js
import React from "react";

const Products = (props) => {
  // Destructure products from props
  return (
    <div
      key={props.id}
      className="bg-gray-900 shadow-md rounded-lg px-10 py-10"
    >
      <img
        src={props.thumbnail}
        alt={props.title}
        className="rounded-md h-48"
      />
      <div className="mt-4">
        <h1 className="text-lg uppercase font-bold">{props.title}</h1>
        <p className="mt-2 text-gray-600 text-sm">
          {props.description.slice(0, 40)}...
        </p>
        <p className="mt-2 text-gray-600">${props.price}</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
