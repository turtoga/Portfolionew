
import './App.scss'
import Navbar from './Components/Navbar'
import Home from './Sections/Home'
import Skills from './Sections/Skills'
import SobreMim from './Sections/SobreMim'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <Home/>
      <SobreMim/>
      <Skills/>
       
    </>
  )
}

export default App
