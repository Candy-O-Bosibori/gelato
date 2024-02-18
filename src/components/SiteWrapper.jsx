import { createContext, useState, useEffect, useContext } from "react";

const SiteContext = createContext()
export const SiteData = () => useContext(SiteContext)

export const SiteWrapper = ({children})=> {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(
        "https://my-json-server.typicode.com/Candy-O-Bosibori/gelato-API/Products"
      )
        .then((resp) => resp.json())
        .then((items) => setData(items));
    }, []); 
    
    return (
        <SiteContext.Provider value={{data}}>
            {children}
        </SiteContext.Provider>
    )
}