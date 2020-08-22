import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { setData } from "./Redux/Actions/index"
import { connect } from 'react-redux'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data))
    }
}

 class App extends React.Component {
    componentWillMount = () => {
        this.props.setData({
            company: {
                name: "ZM Origin",
                logo: "https://picsum.photos/200/50",
                slogan: "Connecting reliable to teachers to students in need. All subjects in all levels of expertise.",
                intro: "Join our community and enjoy great content, even before find your ideal teach, with our many free ebooks and other free material.",
                benefits: [{
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }, {
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }, {
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }, {
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }, {
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }, {
                    title: "lorem",
                    intro: "lorem ipsumlorem ipsum lorem ipsum",
                    pic: ""
                }]
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
                <Navbar />
                <Routes />
                <Redirect to='/Home' />
            </Router>
        </div>
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(App)

export default Form