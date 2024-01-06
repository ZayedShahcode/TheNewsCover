import React from "react";
import '/src/App.css'
import News from "../components/News";
import Navbar from "../components/Navbar";


export default function App(){
    return(
        <>
            <Navbar></Navbar>
            <News></News>
        </>

        
    )  
}