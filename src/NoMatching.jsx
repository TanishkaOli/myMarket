import React,{ useEffect} from "react";

function NoMatching({ children }) {
  console.log("NoMatching reruning");
  useEffect(function() {
    console.log('useEffect vala code');
  },[])
  return(
    <div className="p-5 bg-indigo-400 text-white text-3xl">{children} No matching results found
    </div>
  );
}

export default NoMatching;