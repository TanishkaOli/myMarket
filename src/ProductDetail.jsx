import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getProductData} from './api';
import Loading from './Loading';
import {HiArrowSmLeft, HiArrowSmRight} from "react-icons/hi";
import NotFound from './NotFound';


function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);


useEffect(
  function() {
    const p = getProductData(id);
    p.then(function(product) {
      console.log("api ka response aa gaya",product);
    setProduct(product);
      setLoading(false);
  });

    p.catch(function (error) {
      console.log("api m kuch error aaya",error);
      setLoading(false);
    });
},
  [id]
);

function handleCountChange(event) {
  setCount(+event.target.value);}

  function handleButtonClick() {
    onAddToCart(id, count);
  }


  
  if(loading) {
    return <Loading />
  }

  if(!product) {
    return <NotFound />;
  }

  return (
    
  <>
        <Link className="mt-2 text-indigo-500 flex items-center"to="/">< HiArrowSmLeft className="text-5xl" /> Back 
      </Link>
      <div className="ml-3 mt-4 px-4">

      <img className="w-20" src = {product.thumbnail}/>
      <h1 className="text-4xl mb-2">{product.title}</h1>
      <h1 className="font-bold mb-2">{product.price}</h1>
      <p className="text-4xl mb-2">{product.description}</p>

        <input 
          value={count}
          onChange={handleCountChange}
          className="border border-gray-400 rounded-md w-12 p-2"
          type="number"
          />
        <button onClick={handleButtonClick} 
          className="bg-orange-500 text-white py-2 px-8 ml-2 rounded-md">
          Add to cart
        </button>
</div>
     <div className="flex justify-between px-5 ">
       <div>
         {id > 1 && ( 
      <Link className="mt-2 text-indigo-500 flex items-center"to={"/products/" + (id - 1)}>< HiArrowSmLeft className="text-2xl" /> Previous 
      </Link>
      )}
         </div>
       <div>
      <Link className="mt-2 text-indigo-500 flex items-center"
    to={"/products/" + (id + 1)}>< HiArrowSmRight className="text-2xl" />Next 
    </Link>
         </div>
     </div>
  </>);

 
}

export default ProductDetail;

