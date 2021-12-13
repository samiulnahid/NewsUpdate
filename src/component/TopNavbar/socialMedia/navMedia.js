import React from 'react'
import { Link } from "react-router-dom";

function NavMedia() {
    return (
        <div style={{marginRight:"15px"}}>
           <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link " style={{marginRight:"-28px"}} to="www.facebook.com">
                        <span className='fa fa-facebook-f nav_icon fb-icon'> </span> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={{marginRight:"-28px"}} to=" https://www.youtube.com/">
                        <span className='fa fa-youtube nav_icon youtube-icon'> </span> </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"-28px"}} to=" https://twitter.com/">
                        <span className='fa fa-twitter nav_icon twitter-icon'> </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="https://www.instagram.com/">
                        <span className='fa fa-instagram nav_icon instra-icon'> </span>  
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavMedia
