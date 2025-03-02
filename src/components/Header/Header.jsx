import { IoSearchSharp } from "react-icons/io5";

import './Header.scss';

export default function Header() {
  return (
    <>
    <header className='header'>
        <div className='Logo-container'>
            <img src="logo-glaise.svg" alt="Logo Glaise Bolos" />
        </div>
        <nav className='nav-menu'>
            <ul className='menu'>
                <li><a href="#galeria">Galeria</a></li>
                <li>Sobre</li>
                <li>Contato</li>
                <li>Localização</li>
            </ul>
        </nav>

        <a className="search btn"><IoSearchSharp /></a>

    </header>
    </>
  )
}
