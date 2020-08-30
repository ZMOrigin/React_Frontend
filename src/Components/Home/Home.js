import React from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Benefits from '../Benefits/Benefits'
import './Home.css'

export default () => {
    return <div id='homeContainer'>
        <Jumbotron />
        <Benefits />
    </div>
}