import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';



const Navbar = () => {

    let navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/login');
        
    }
    let location = useLocation();
    
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">iNoteBook</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${location.pathname=="/"? "active": ""}`}>
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className={`nav-item ${location.pathname=="/about"? "active": ""}`}>
                        <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                    </li>
                    
                </ul>
                {(!localStorage.getItem('token')) ?
                <form className="form-inline my-2 my-lg-0">
                    <Link className="btn btn-primary mx-2 my-sm-0" to="/login" type="submit">Login</Link>
                    <Link className="btn btn-primary mx-2 my-sm-0" to="/signup" type="submit">Signup</Link>
                </form>
                :<button onClick={handleLogout} className='btn btn-primary'>logout</button>}
            </div>
        </nav></div>
    )
}

export default Navbar