import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return(
    <header>
      <h1><Link to="/">GatsMark</Link></h1>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header