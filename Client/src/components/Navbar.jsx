import React, { useState } from 'react'
import './Component_css/Navbar.css'
import ImageSearchIcon from '../assets/NavbarImage/Search.png'
import CartIcon from '../assets/NavbarImage/image.png'
import {NavLink} from 'react-router-dom'
import HomePage from '../pages/HomePage.jsx'

const Navbar = () => {
const [SearchIcon, setSearchIcon] = useState(true);
const SearchToggler=(prev)=>{
    setSearchIcon(!prev);
}
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#" style={{fontFamily:'Ibarra Real Nova', fontWeight:500,fontSize:'20px'}}>Home</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown"  >
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" style={{background:'none' , color:'black' }} >Men</NavLink></li>
            <li><NavLink className="dropdown-item" style={{background:'none' , color:'black'}} >Women</NavLink></li>
            <li><NavLink className="dropdown-item" style={{background:'none' , color:'black'}}>Kids</NavLink></li>
          </ul>
        </li>
        
      </ul>
      <div className='BrandContainer'>
       
       <h2 className='Brand'>MANZARIA</h2>    
      </div>
    </div>
    
       <>
        <div className='right-Nav' onClick={SearchToggler}>
        <img src={ImageSearchIcon} width={15} />
        <img src={CartIcon} width={25}/>
    </div>
        </>
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        <div className='searchIcon' onClick={SearchToggler}>
        <img src={ImageSearchIcon} width={25} />
    </div>
      </form> */}
    <li className='nav-item'>
     <NavLink to='/register'>register</NavLink>
     </li>
     <li className='nav-item'>
     <NavLink to='/login'>Login</NavLink>
     </li>
  </div>
</nav>


    </>
  )
}

export default Navbar