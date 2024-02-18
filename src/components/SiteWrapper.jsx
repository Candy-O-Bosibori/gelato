import { createContext, useState, useEffect, useContext } from "react";
import { 
  createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
 } from "firebase/auth";
import { auth } from "../firebase";


const SiteContext = createContext()
export const SiteData = () => useContext(SiteContext)

export const SiteWrapper = ({children})=> {
    const [user, setUser] = useState({})
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(
        "https://my-json-server.typicode.com/Candy-O-Bosibori/gelato-API/Products"
      )
        .then((resp) => resp.json())
        .then((items) => setData(items));
    }, []); 


    
 

    // setts the curren tuser
    const createUser = (name, email, password)=> {
 
      return createUserWithEmailAndPassword(auth ,email, password)
    
    }

    const logInUser = ( email, password)=> {
 
      return signInWithEmailAndPassword(auth ,email, password)
    
    }
    
    const logOut = ()=> {
      return signOut(auth)
    }

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
   console.log(currentUser)
   setUser(currentUser)
  })

  return()=> {
    unsubscribe()
  }
}, [])


    return (
        <SiteContext.Provider value={{data, createUser, logOut, logInUser, user}}>
            {children}
        </SiteContext.Provider>
    )
}