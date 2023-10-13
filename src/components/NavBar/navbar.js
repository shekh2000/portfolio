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
                <Link className='desktopMenuListItem'>Education</Link>
                <Link className='desktopMenuListItem'>Skills</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact
            </button>

        </nav>
  )
}

export default Navbar