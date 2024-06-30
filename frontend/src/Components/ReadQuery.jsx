import React from 'react'
import './ReadQuery.css'
import axios from 'axios'
import { useData } from '../Context/NewsContext'

export default function ReadQuery() {

  const {query,setQuery,setData,isLoading,setIsLoading} = useData();

  const handleOnClick = (e)=>{
    e.preventDefault();
    try{
      setIsLoading(true);
    axios.post("https://thenewscover.onrender.com/news",{query})
    .then(
    (res)=>{
       setData(res.data.articles);
       setIsLoading(false)
    }
   ) 
    }
    catch{
      throw new Error("Cannot fetch Data");
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <div className="container">
        <form className='inputForm'>
        <h3>Enter a Keyword </h3>
        <input type="text" placeholder='Search' className='query'
        value={query} onChange={(e)=>{setQuery(e.target.value)}} required />
        <button onClick={handleOnClick}>Search</button>
        </form>
        
    </div>
  )
}
