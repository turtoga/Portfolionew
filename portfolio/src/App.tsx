import { useState } from 'react'
import './App.scss'
import Navbar from './Components/Navbar'
import Home from './Sections/Home'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <Home/>
       
    </>
  )
}

export default App
