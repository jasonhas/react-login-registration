import React from 'react'
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className='navbar-start'>
        <Link to="/" className='font-bold text-3xl'>Registration</Link>
      </div>
      <div className='navbar-end'>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
        <LuMenu/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to="/about" className="justify-between">
            About
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
      </div>
    </div>
  )
}

export default Header