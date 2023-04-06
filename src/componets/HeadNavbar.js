import React from 'react'
import { Link } from 'react-router-dom';


function HeadNavbar() {
    return (
        <>
            <div className='navbar'>

                <Link to='/'><span className='logo'>React-Test-App</span></Link>
                <div className="nav-link">


                    <Link to='/details'><span>Details</span></Link>
                    <Link to='/user'> <span>User</span></Link>

                </div>

            </div>
        </>
    )
}

export default HeadNavbar
