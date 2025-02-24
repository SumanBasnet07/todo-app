import React from 'react'

const Navbar = () => {
  return (
    <nav className = "navbar">
        <div className="logo">
            <h1>Todo-App</h1>
        </div>
        <div className="navigations">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
    
       
}

export default Navbar
