import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Teachers from '../Teachers/Teachers'
import Students from '../Students/Students'
import About from '../About/About'
import User from '../User/User'

export default () => {
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
        <Route path='/User'>
            <User />
        </Route>
    </Switch>
}