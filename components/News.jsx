import React, { useEffect } from "react";
import '../components/news.css'
import { useState} from "react";


export default function News(){

    const newsItem = document.querySelector('.newsItem')
    const newslist = document.querySelector('.newsList');

    const [val,setVal] = useState('')

    const handleOnChange = (e)=>{
        const text = e.target.value;
        setVal(text)
        newslist.innerHTML= "";
    }
    
    function retrieve(e){
        e.preventDefault();

        const apiKey =  '03122803e6a8423385b9989cb2d61122';
        const topic = val;
        const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`

        fetch(url)
        .then((response)=>{return response.json()})
        .then((data)=>{ 
            console.log(data)
            for(let i in data.articles){
                const childNews = document.createElement('div')
                childNews.setAttribute('class','newsbox grid-item')
                const articleDesc = document.createElement('p')
                const headline = document.createElement('h3')
                const articleUrl = document.createElement('a')
                const articleImg = document.createElement('img')
                articleImg.setAttribute("src",data.articles[i].urlToImage)
                articleUrl.setAttribute("href",data.articles[i].url)
                articleUrl.setAttribute("class","articleUrl")
                articleUrl.textContent= "Click Here"
                headline.textContent = data.articles[i].title
                articleDesc.textContent = data.articles[i].description
                childNews.appendChild(headline)
                childNews.appendChild(articleImg)
                childNews.appendChild(articleDesc)
                childNews.appendChild(articleUrl)
                newslist.appendChild(childNews)
            }
        })
        
    }

    return(
        <>  
        <div className="allBody">
            
        <div className="allsearch">
        <div className="inputquery">
            <div className="space"></div>
            <input type="text" className="inputbox" onChange={handleOnChange} placeholder="Enter Topic" />
            
            </div>
            <input type="submit" className="inputSubmit" onClick={retrieve} />
            </div>
       
        <div className="newsItem">
            
            <div className="newsList grid">
                
            </div>
            

        </div>
        </div>

        </>

        
    )

    
}