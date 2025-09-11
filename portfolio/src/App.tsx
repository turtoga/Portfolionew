
import './App.scss'
import Navbar from './Components/Navbar'
import Home from './Sections/Home'
import SobreMim from './Sections/SobreMim'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <Home/>
      <SobreMim/>
       
    </>
  )
}

export default App
