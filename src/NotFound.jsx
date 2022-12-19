import React from 'react';
import {Link} from 'react-router-dom';
import {ImHome3} from "react-icons/im";



function NotFound() {
  return (
  <div className="flex flex-col">
            <div className="m-2">
        <Link className=" text-indigo-500 "to="/">< ImHome3 className="text-5xl " /> Go Home
          </Link>
          </div>

    <div className="flex items-center justify-center w-full h-full">
    <img className="w-1/6 object-cover p-5" src="https://thumbs.dreamstime.com/b/page-not-found-28300339.jpg" />
      </div>
      <div className=" p-5">
      <div className=" text-center text-5xl font-bold mb-5">Page Not Found </div>
        <h3 className="text-center text-gray-400">We're sorry, the page you requested could not be found.</h3>
        <h3  className="text-center text-gray-400">Please go back to the home page.</h3>
        </div>
  </div>
    );
}

export default NotFound;