import React from 'react'


function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" to="/">D Calculator</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"  ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        </ul>
        
        <div className={`form-check form-switch text-${props.textColor}`} >
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
        </div>
      </div>
    </div> 
  </nav>
  )
}

export default Navbar
