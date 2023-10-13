import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contactimg.png';
import logo from '../../assets/logo1.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me
            </button>

        </nav>
  )
}

export default Navbar