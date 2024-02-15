import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from "./components/FirstPage/FirstPage";

import { useState } from 'react'
import Login from './components/Login/Login';
import Register from './components/Register/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes >
       <Route index path='/' element={<FirstPage></FirstPage>}></Route>
       <Route index path='register' element={<Register></Register>}></Route>
       <Route index path='login' element={<Login></Login>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
