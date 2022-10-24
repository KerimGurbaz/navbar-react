
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Home from './components/Home'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Navbar from './Navbar'


function App() {
  return (

     <BrowserRouter>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Error/>}/>


     </Routes>
     
     
     </BrowserRouter>

  )
}

export default App
