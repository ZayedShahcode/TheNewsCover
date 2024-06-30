import { createContext, useContext, useState } from "react"


const DataContext = createContext();

function DataProvider({children}){
    const [query,setQuery] = useState("");
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    
    return(
        <DataContext.Provider value={
            {
                query,setQuery,data,setData,isLoading,setIsLoading
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