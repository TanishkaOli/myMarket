import React, {useEffect} from "react";
import {getProductData} from "./api";


function CartPage({cart}) {
  const [products, setProducts] = useState([]);
  const productIds = Object.keys(cart);
  console.log("product ids",productIds);

  useEffect (function () {
    for(let i = 0;i< productIds.length;i++) {
      getProductData(productIds[i]).then(function(product) {
        console.log("Product",product);
        setProducts([...products,product]);
      });
    }
  },[]);
    
  return <div>{products.map(function(p){return <div key={p.id}>{p.name}</div>})}</div>
  
}

export default CartPage;