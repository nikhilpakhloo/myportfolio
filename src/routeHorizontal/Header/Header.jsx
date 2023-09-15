import { Link } from "react-router-dom"
import "./header.scss"
import { useState } from "react";

export default function Header() {


  return (
    <div className='header'>
      <div className="logo">
        <h1>nikhil<span>.</span></h1>

      </div>
      <div className="routes">
        <li>
          <Link className="route" to="/">Home</Link>
        </li>
        <li>
          <Link className="route" to="/about">About</Link>
        </li>
        <li>
          <Link className="route" to="/work">Work</Link>

        </li>
        <li>
          <Link className="route" to="/contact">Contact</Link>

        </li>


      </div>

    </div>
  )
}
