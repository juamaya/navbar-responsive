
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
import logo from '../assets/vite1.jpg'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
           <div>
           <img src={logo} alt="logo" width={70}  />
            <Link to="/" className="title">JUAMAYA</Link>

           </div>

            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar