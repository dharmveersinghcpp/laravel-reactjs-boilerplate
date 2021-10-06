import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class page extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container px-5">
                        <Link className="navbar-brand" to="/">Boilerplate</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                    </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
