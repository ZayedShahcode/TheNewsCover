import React from 'react'
import './NewsItem.css'

export default function NewsItem({item}) {
  return (
    <div className="box">
        <div className="title">{item.title}</div>
        <div className='image'>
        <img src={item.urlToImage} alt="pic" />
        </div>
        <div className="description"><p>{item.description}</p>
        <a href={item.url} target="_blank"  rel="noreferrer" >Link</a>
        </div>
    </div>
  )
}
