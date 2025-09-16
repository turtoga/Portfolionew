import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.scss";
import hamburguer from "../../assets/hamburgerIcon.svg";
import close from '../../assets/closeIcon.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <img src={isOpen ? close : hamburguer} alt="Menu" />
      </button>

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <HashLink smooth to="/#home" onClick={() => setIsOpen(false)}>Home</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#sobre" onClick={() => setIsOpen(false)}>SobreMim</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#skills" onClick={() => setIsOpen(false)}>Skills</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projetos" onClick={() => setIsOpen(false)}>Projetos</HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contato" onClick={() => setIsOpen(false)}>Contato</HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
