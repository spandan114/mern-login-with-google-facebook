import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

function Navbar() {

  const user = useSelector(state => state.authReducer)


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <Link className="navbar-brand" to={user?'/profile':'/'}>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      {
       user && user?
        <>
        <li className="nav-item">
        <a className="nav-link active" href="http://localhost:5000/api/logout">Logout</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to={user?'/profile':'/'}>Profile</Link>
      </li>
      </>
      :
      <li className="nav-item">
        <Link className="nav-link active" to="#">Login</Link>
      </li>
      }     
    </ul>
  </div>
</nav>
    )
}

export default Navbar
