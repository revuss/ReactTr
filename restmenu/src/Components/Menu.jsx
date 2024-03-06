import React from "react";
import Products from "./service/Products";
import useProducts from "./service/Items";

const Menu = () => {
  const { products } = useProducts();
  return (
    <div className=" container">
      <div className="flex flex-col justify-center ">
        <div className="flex justify-between items-center px-20 py-5">
          <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
            Shop
          </h1>
          <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
            Cart
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
          {products.map((product) => (
            <Products
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
