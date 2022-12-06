// Context (warehouse)
// provider (delivery boy)
// consumer/useContext (you)

import React, { useContext,useEffect,useState} from "react";

export const api_url=`http://www.omdbapi.com/?apikey=fea70fc6`;
// context
const AppContext = React.createContext();

//provider
const AppProvider = ({ children }) => {
const [loading , setLoading] = useState(true);
const [movie,setMovie] = useState([]);
const [isError, setIsError] = useState({show:'false',msg:""});
const [query , setQuery]=useState('titanic')
const getData=async(url)=>{
  setLoading(true);
  
    try{
      const data=await fetch(url);
      const json_data=await data.json();
      console.log(json_data);
      if(json_data.Response==='True'){
        setLoading(false);
        setIsError({
          show:false,
          msg:""
        })
        setMovie(json_data.Search)
      }
      else{
setIsError({
  show:true,
  msg:json_data.Error
})
      }
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
   let timer=setTimeout(() => {
    getData(`${api_url}&s=${query}`);
   }, 500);
    return ()=>clearTimeout(timer);
  }, [query]);
  return <AppContext.Provider value={{loading , isError, movie,query , setQuery}}>{children}</AppContext.Provider>;
};

//  global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
