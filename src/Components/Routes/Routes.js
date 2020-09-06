import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Teachers from '../Teachers/Teachers'
import Students from '../Students/Students'
import About from '../About/About'
// import User from '../User/User'
import Login from '../Login/Login'
import Register from "../Register/Register"

class Routes extends React.Component {
    render() {
        return <Switch>
            <Route path='/Home'>
                <Home />
            </Route>
            <Route path='/Teachers'>
                <Teachers />
            </Route>
            <Route path='/Students'>
                <Students />
            </Route>
            <Route path='/About'>
                <About />
            </Route>
            <Route path='/Login'>
                {/* <User /> */}
                <Login />
            </Route>
            <Route path='/Register'>
                <Register />
            </Route>
        </Switch>
    }
}
export default Routes