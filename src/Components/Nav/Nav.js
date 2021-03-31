import React from 'react'
import './Nav.css'
import { useHistory } from 'react-router-dom'

const Nav = () => {
    const history = useHistory()
    return (
        <div className="nav">
            <span className="nav__back_btn" onClick={() => history.go(-1)}>
                <i className="fal fa-arrow-left"></i>
                Go Back
            </span>
        </div>
    )
}

export default Nav
