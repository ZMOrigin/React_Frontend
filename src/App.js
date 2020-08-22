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
            company: {
                name: "ZM Origin",
                logo: "https://picsum.photos/200/50",
                slogan: "Connecting reliable to teachers to students in need. All subjects in all levels of expertise.",
                intro: "Join our community and enjoy great content, even before find your ideal teach, with our many free ebooks and other free material."
            },
            members: [{
                id: 1341341,
                name: "Gio",
                gender: "",
                avatar: "",
                speciality: [],
                intro: "",
                roll: "teacher"
            }, {
                id: 1341341,
                name: "Gio",
                gender: "",
                avatar: "",
                speciality: [],
                intro: "",
                roll: "student"
            }, {
                id: 1341341,
                name: "Gio",
                gender: "",
                avatar: "",
                speciality: [],
                intro: "",
                roll: "staff"
            }],
            menuItems: ['Home', 'Teachers', 'Students', 'About']
        })
    }

    render = () => {
        return <div className="App">
            <Router>
                <Navbar logo={this.state.company.logo} menuItems={this.state.menuItems} />
                <Routes routes={[...this.state.menuItems, 'User']} />
            </Router>
        </div>
    }
}
