import React from 'react'
import { Link } from "react-router-dom";
const Navbar=()=>{

    return (
      <>
<nav className="navbar py-3 py-lg-3.5 fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
  <a className="navbar-brand" href="/"><strong> Daily-News</strong> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/"><strong> Home</strong> </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/general"> <strong>General </strong> </Link>
        </li>
        <li><Link className="nav-link"  to="/business"> <strong>Business</strong> </Link></li>
            <li><Link className="nav-link"  to="/entertainment"> <strong>Entertainment</strong></Link></li>
            <li><Link className="nav-link"  to="/health"> <strong>Health</strong></Link></li>
            <li><Link className="nav-link"  to="/science"> <strong>Science</strong></Link></li>
            <li><Link className="nav-link"  to="/sports"> <strong>Sports</strong></Link></li>
            <li><Link className="nav-link"  to="/technology"> <strong>technology</strong></Link></li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
    ) 
}
export default Navbar