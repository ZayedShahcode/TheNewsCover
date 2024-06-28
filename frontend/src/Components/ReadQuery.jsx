import React from 'react'
import './ReadQuery.css'
import axios from 'axios'

export default function ReadQuery({query,setQuery,data,setData}) {

  const handleOnClick = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/news",{query})
    .then(
    (res)=>{
       setData(res.data.articles);
    }
   )
   console.log(data)

    
   
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
