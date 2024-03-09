import React from "react";

const Footer = ({ items }) => {
  const totalQuantity = items
    .filter((item) => !item.packed)
    .reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="fixed-bottom bg-light">
      Total items needs to be packed : {totalQuantity}
    </div>
  );
};

export default Footer;
