import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { Link, NavLink} from 'react-router-dom'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle'><FaBars/></button>

        </div>
        <div className="links-container">
          <ul className="links">
            {links.map((link)=>{
              return(
                <li key={link.id}>
                    <NavLink to={link.url}>{link.text}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>

            <ul className="social-icons">
              {social.map((item)=> <li key={item.id}> <a href={item.url}>{item.icon}</a> </li> )}
            </ul>

      </div>


    
  </nav>
  )
}

export default Navbar
