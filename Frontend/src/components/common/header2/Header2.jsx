import React, { useState } from "react"
import { Link } from "react-router-dom"
// import Head from "./Head1"
import "./header.css"
import { Button } from "@mui/material"
import Head2 from "./Head2"

const Header2 = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head2 />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>All Courses</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </ul>
          <div className='start'>
          <div className='button' ><Link to='/' ><Button style={{color:"white"}}>Logout</Button></Link></div>
            {/* <span>|</span>
            <div className='button'><Link to='/student'><Button style={{color:"white"}}>Signup</Button></Link></div> */}
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header2
