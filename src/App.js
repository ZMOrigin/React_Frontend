import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentWillMount = () => {
        this.setState({
            companyName: 'ZM Origin',
            companyLogo: 'https://picsum.photos/200/50',
            menuItems: ['Home', 'Teachers', 'Students', 'About']
        })
    }

    render = () => {
        return <div className="App">
            <Router>
                <Navbar logo={this.state.companyLogo} menuItems={this.state.menuItems}/>
                <Routes routes={[...this.state.menuItems, 'User']} />
            </Router>
        </div>
    }
}
