import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Link } from "react-router-dom"

function Menu() {
  let { loginWithPopup, loginWithRedirect, logout, isAuthenticated } = useAuth0()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src='logo11.png' alt='logo' width="40px" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/read">Read</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/update/2">Update</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/search">Search</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-danger" type="submit">Search</button>
              </form>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={loginWithPopup}>Login with Popup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={loginWithRedirect}>login with redirect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div>
        {isAuthenticated ? alert("user login") : alert("please login")}
      </div>
    </>
  )
}

export default Menu