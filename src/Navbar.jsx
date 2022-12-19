import React from 'react';
import { HiShoppingCart } from "react-icons/hi";

function Navbar({productCount}) {
  return (
    <div className ="bg-white">
    <div className = "max-w-6xl py-4 flex justify-between mx-auto ">
      <img className = "w-40 ml-4" src="https://adapt.uz/wp-content/uploads/2018/01/Mybazar-log-no-resto-1024x553.png"/>
      <div className="flex flex-col items-center">
      <HiShoppingCart className="text-6xl text-orange-500" />
      <span className="-m-12">{productCount}</span>
        </div>
        </div>
      </div>
  );
  
}

export default Navbar;