import React from "react";
import './App.css'
import Header from "./Components/Header";
import ReadQuery from "./Components/ReadQuery";
import NewsContent from "./Components/NewsContent";
import { DataProvider } from "./Context/NewsContext";

export default function App() {



   return (
      <DataProvider>
         <Header></Header>
         <ReadQuery></ReadQuery>
         <NewsContent></NewsContent>
      </DataProvider>
   )
}