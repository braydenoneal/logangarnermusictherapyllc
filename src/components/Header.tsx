import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='logo' src='images/icon/logo500.png' alt='Logo'/>
            <div className='title' style={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
            }}>Garner Music Therapy LLC</div>
            <div className='navigation' style={{
                display: 'flex',
                alignItems: 'stretch',
                alignContent: 'stretch',
            }}>
                <div className='link'><NavLink to='/' className={({ isActive }) => isActive ? 'link_active' : 'link_inactive'}>Home</NavLink></div>
                <div className='link'><NavLink to='/about' className={({ isActive }) => isActive ? 'link_active' : 'link_inactive'}>About</NavLink></div>
                <div className='link'><NavLink to='/services' className={({ isActive }) => isActive ? 'link_active' : 'link_inactive'}>Services</NavLink></div>
            </div>
        </div>
    )
}

export default Header
