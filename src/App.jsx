import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from "./components/FirstPage/FirstPage";
import { ProtectedRoute } from './components/ProtectedRoute';
import { useState , useEffect} from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';



function App() {
const [user, setUser] = useState(null);
const [isfetching, setIsfetching] = useState(true)
useEffect (()=> {
  const unsubscribe = onAuthStateChanged(auth, (user)=> {
    if(user){
      setUser(user);
      setIsfetching(false)
      return;
    }
    setUser(null)
    setIsfetching(false)
  })
  return()=> unsubscribe()
}, [])

 if(isfetching){
  return <h2>Loading...</h2>
 }

  return (
    <>
    <BrowserRouter  basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}>
    <Routes >
       <Route index path='/' element={<FirstPage></FirstPage>}></Route>
       <Route index path='register' element={<Register></Register>}></Route>
       <Route index path='login' element={<Login></Login>}></Route>
       <Route index path='/private' element={<ProtectedRoute user={user}>
        <Home></Home>
       </ProtectedRoute>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
