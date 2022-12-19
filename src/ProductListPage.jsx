import React,{ useState , useEffect } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import NoMatching from './NoMatching'; 
import Loading from './Loading';

function ProductListPage() {
  const [productList , setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(
    function () {
     const xyz = getProductList();

      xyz.then(function (products) {
        setProductList(products);
        setLoading(false);
        return products[0];
       });
    },
    []
  );


  
 let data = productList.filter(function (item) {
        
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
         
      return lowerCaseTitle.indexOf(lowerCaseQuery) != -1; 
      
    });

    if (sort == "price") {
      data.sort(function (x, y) {
        return x.price - y.price;
      });
    } else if (sort == "name") {
      data.sort(function(x, y) {
        return x.title < y.title ? -1 : 1; 
      });
    } else if (sort == "hprice") {
      data.sort(function (x, y) {
        return (y.price - x.price);
      });
    }
  

  
  function handleQueryChange(event) {
  setQuery(event.target.value);
  }
    function handleSortChange(event) {
      setSort(event.target.value);
  }

if (loading) {
  return <Loading />;
}
  
  return ( 
    
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16 ">
              <input className="bg-gray-200"
              value = {query}
              placeholder="search" 
              className="border border-gray-700 rounded-md mb-5 "
              onChange = {handleQueryChange}
              />

            <select onChange={handleSortChange} 
            className="mb-5 bg-gray-200 rounded-md mr-2"
             value = {sort}
            >
            
            <option value="default">DEFAULT SORTING</option>
            <option value="name">Sort By Name</option>
            <option value="price">Sort by Price Low to High</option>
            <option value="hprice">Sort by Price High to Low</option>
            
          </select>
          


        {data.length > 0 && <ProductList products = {data} />}
        {data.length == 0 && <NoMatching />}

    
        

    </div>
   
    );
} 

   
    

  

export default ProductListPage;