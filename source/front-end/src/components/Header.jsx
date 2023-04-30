import { FaInfo, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import React from 'react'

function Header(){
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Watson Airlines</Link>
        </div>
        <ul>
            <li>
                <Link to='/about'>
                    <FaInfo/> About
                </Link>
            </li>
            <li>
                <a rel="noreferrer" target="_blank" href="https://github.com/devBochi/build-labs-watson-airlines">
                    <FaGithub/> Code
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Header