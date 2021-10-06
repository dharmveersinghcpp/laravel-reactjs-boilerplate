import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class page extends Component {
    render() {
        return (
            <>
                <header className="masthead text-center text-white">
                    <div className="masthead-content">
                        <div className="container px-5">
                            <div className="row">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                    <div className="card p-5">
                                        <h2 className="text-dark">Forget Password</h2>
                                        <div className="form-group mt-3">
                                            <input type="text" className="form-control" name="email" placeholder="Email address" />
                                        </div>
                                        <div className="form-group mt-3">
                                            <button type="button" className="btn btn-primary btn-lg rounded-pill">Reset Password</button>
                                        </div>
                                        <div className="form-group mt-2">
                                            <Link to="/signin">SignIn</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-circle-1 bg-circle"></div>
                    <div className="bg-circle-2 bg-circle"></div>
                    <div className="bg-circle-3 bg-circle"></div>
                    <div className="bg-circle-4 bg-circle"></div>
                </header>   
            </>
        )
    }
}
