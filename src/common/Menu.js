// import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom"
import axios from 'axios'
export let ContextData=React.createContext()


function Menu() {
 
  let navigate=useNavigate()
  let [searchkey, setsearchkey] = useState()
  let [val, setval] = useState()



  let searchUser = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/Songs?title=${searchkey}`).then((res) => {
      setval(res.data);
      navigate('/search');
    });
  }


  
  // let { loginWithPopup, loginWithRedirect, logout } = useAuth0()
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo11.png" alt='logo' width="40px"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/read">Read</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/update/2">Update</Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search"  onSubmit={searchUser} >
              <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    onChange={(e) => { setsearchkey(e.target.value) }}
  />
  <button className="btn btn-danger" type="submit">Search</button>
              </form>
            </ul>
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="#" onClick={loginWithPopup}>Login with Popup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#" onClick={loginWithRedirect}>login with redirect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#" onClick={logout}>Logout</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>

      <div>
        {/* {isAuthenticated ? alert("user login") : alert("please login")} */}

      </div>

      <ContextData.Provider value={val}>
      </ContextData.Provider>



        


    </>
  )
}

export default Menu