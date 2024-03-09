import React from "react";

const Header = () => {
  return (
    <>
      <div className="header bg-gray-900 sticky top-0 flex items-center d-flex place-content-center text-white flex items-center  py-4">
        <nav className="nav font-semibold text-md text-white items-center">
          <ul className="flex items-center text-white ">
            <li className=" p-4 border-b-2  border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200">
              <a className="text-white" href="">
                Menu
              </a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200 ">
              <a href="" className="text-white">
                Specials
              </a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200 ">
              <a href="" className="text-white">
                Customs
              </a>
            </li>
            <li className="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100  duration-100 ">
              <a href="" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
