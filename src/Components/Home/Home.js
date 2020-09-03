import React from 'react'
import Jumbotron from '../Jumbotron/Jumbotron'
import Benefits from '../Benefits/Benefits'
import './Home.css'

class Home extends React.Component {
    render() {
        return <div id='homeContainer'>
            <Jumbotron />
            <Benefits />
        </div>
    }
}

export default Home