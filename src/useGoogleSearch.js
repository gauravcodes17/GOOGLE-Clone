import { useState, useEffect } from "react";
import API_KEY from "./Keys";

const CONTEXT_KEY = "c3ac920f543e9479c";

const useGoogleSearch = (term) => {
  const [data, setData] = useState();

  useEffect(() => {
    //console.log("hello");
    
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
