import { useState } from "react"
import "./Navbar.scss"
import hamburguer from "../../assets/hamburgerIcon.svg"
import close from '../../assets/closeIcon.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <img src={isOpen ? close : hamburguer} alt="Menu" />
      </button>

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
        <li><a href="#projetos" onClick={() => setIsOpen(false)}>Projetos</a></li>
        <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
