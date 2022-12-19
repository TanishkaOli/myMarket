import React from 'react';
import {Link} from 'react-router-dom';


function Product({ title, price, category, thumbnail, id,} ) {
  return(
<div className="w-60">
  <div className="w-full h-60">
  <img className="w-full h-full object-cover" src = {thumbnail} />
    </div>
  <div className="text-gray-500">{category}</div>
  <div className="font-bold">{title}</div>
  <div className="font-bold mb-2">Rs.{price}</div>
  <Link className="bg-blue-500 rounded-md text-white p-2" to={"/products/" + id}> View Detail </Link>
</div>
);
}

export default Product;
