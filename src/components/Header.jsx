import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
    fontWeight: "bold",
}

const Header = () => {
    return (
        <header>
            <nav >
                <NavLink
                    to='.'
                    className='Navbar--Elements'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/Crops'
                    className='Navbar--Elements'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Crops
                </NavLink>
                <NavLink
                    to='/Login'
                    className='Navbar--Elements'
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Login
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;