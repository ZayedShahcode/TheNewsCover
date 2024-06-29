import React from 'react'
import NewsItem from './NewsItem'

export default function NewsContent({data}) {
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>{data.map((item)=>{ 
    
      return item.urlToImage === null ? <></> : <NewsItem item={item} key={item.url}/>
    })}</div>
  )
}
