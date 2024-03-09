import React from "react";
import { isOpen, remainingTime } from "./service/RestTime";

const Footer = () => {
  return (
    <>
      <div className="w-full   mx-auto p-4 md:py-8 items-center">
        <div className="text-center items-center justify-self-center items-center">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            <div className="text-center items-center justify-self-center">
              {isOpen ? (
                <div>
                  <p>Shop is now open</p>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                </div>
              ) : (
                <div>
                  <p>Shop is now closed. Will be back after {remainingTime}</p>
                  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                  <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    We accept orders from 10 AM to 10 PM daily. We apologize for
                    any inconvenience and look forward to serving you during our
                    operating hours.
                  </span>
                </div>
              )}
            </div>
          </span>
        </div>
      </div>
      <div className="">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="order-1 text-center justify-self-center align-center md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* </footer> */}
    </>
  );
};

export default Footer;
