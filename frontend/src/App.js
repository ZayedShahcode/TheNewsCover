import React, { useEffect } from "react";
import './App.css'
import Header from "./Components/Header";
import ReadQuery from "./Components/ReadQuery";
import { useState } from "react";
import NewsContent from "./Components/NewsContent";

export default function App(){

    const [query,setQuery] = useState("");
    const [data,setData] = useState([])

 return(
    <>
    <Header></Header>
    <ReadQuery query={query} setQuery={setQuery} data={data} setData={setData}></ReadQuery>
    <NewsContent data={data}></NewsContent>

    </>
 )
}