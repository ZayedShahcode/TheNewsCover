import React from 'react'
import NewsItem from './NewsItem'
import { useData } from '../Context/NewsContext'

export default function NewsContent() {

  const {data,isLoading}=useData();
  if(isLoading===true){
    return(
      <div>Loading</div>
    )
  }
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>{data.map((item)=>{ 
      
      return item.urlToImage === null ? <></> : <NewsItem item={item} key={item.url}/>
    })}</div>
  )
}
