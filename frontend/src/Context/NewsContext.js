import { createContext, useContext, useState } from "react"


const DataContext = createContext();

function DataProvider({children}){
    const [query,setQuery] = useState("");
    const [data,setData] = useState([])
    
    return(
        <DataContext.Provider value={
            {
                query,setQuery,data,setData
            }
        }>
            {children}
        </DataContext.Provider>
    )
}

function useData(){
    const context = useContext(DataContext);
    if(context===undefined){
        throw new Error("Failed");
    }
    return context;
}

export {DataProvider,useData}