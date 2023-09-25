import React from 'react'
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CiLogout } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
const Nav = ({search, setSearch, searchproduct}) => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <>

    {/* HEADER LINKS */}
    <div className='last_header'>
            <div className='user_profile'>
                {
                    isAuthenticated ?
                    <>
                    <div className='icon'>
                        <CiUser />
                    </div>
                    <div className='info'>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className='icon'>
                        <CiUser />
                    </div>
                    <div className='info'>
                        <p>Please, Login</p>
                    </div>
                    </>
                }
            </div>
            <div className="nav">
                <nav ref={navRef}>
                <ul>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/shop" className='link'>Shop</Link></li>
                    <li><Link to="/cart" className='link'>Cart</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
                </nav>
            </div>
            <div className='offer'>
                <p>flat 10% over all snikers</p>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            
        </div>

        {/* HEADER WITH SEARCH */}

        <div className='header'>
            <div className='logo'>
              <Link to='/'><img src='./img/logo_orange.png' alt='logo'></img></Link>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={searchproduct}><AiOutlineSearch/></button>
            </div>
            {
                isAuthenticated ? 
                //logout button
                <div className='user'>
                <div className='icon'>
                    <CiLogout/>
                </div>
                <div className='btn'>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
            </div>
                :
                //login button
                <div className='user'>
                <div className='icon'>
                    <FiLogIn/>
                </div>
                <div className='btn'>
                    <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
            }
            
            
        </div>
        
        
    </>
  )

}
export default Nav