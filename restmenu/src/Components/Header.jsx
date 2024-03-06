import React from "react";

const Header = () => {
  return (
    <>
      <div class="header bg-gray-900 sticky top-0 flex items-center d-flex place-content-center text-white flex items-center  py-4">
        <nav class="nav font-semibold text-md text-white items-center">
          <ul class="flex items-center text-white ">
            <li class=" p-4 border-b-2  border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200">
              <a className="text-white" href="">
                Menu
              </a>
            </li>
            <li class="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200 ">
              <a href="" className="text-white">
                Specials
              </a>
            </li>
            <li class="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100 duration-200 ">
              <a href="" className="text-white">
                Customs
              </a>
            </li>
            <li class="p-4 border-b-2 border-gray-500 border-opacity-0 hover:border-opacity-100  duration-100 ">
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
