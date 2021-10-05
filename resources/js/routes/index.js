import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../pages/home'
import Header from "../pages/header"
import Footer from "../pages/footer"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import ForgetPassword from "../pages/forget-password"

export default class index extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/signin">
                        <Signin />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/forget-password">
                        <ForgetPassword />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        )
    }
}
