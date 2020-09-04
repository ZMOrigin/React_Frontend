import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import { Loader } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { setData, setUsers } from "./Redux/Actions/index"
import { connect } from 'react-redux'
//import getData from './Assets/data'
import { socket } from './client'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data)),
        setUsers: users => dispatch(setUsers(users))
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data,
        users: state.users
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        socket.emit("get", "appData", "5f466cc18596f6242caa02b4", (e, data) => {
            this.props.setData(data)
        })
        const users = [{
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Teacher",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Teacher",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Teacher",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Teacher",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Teacher",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Student",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Student",
            curricula: ["English", "Math", "CS"]
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "www...",
            country: "China",
            role: "Student",
            curricula: ["English", "Math", "CS"]
        }]
        this.props.setUsers(users)
    }

    render = () => {
        console.log(this.props)
        return <div className="App">
            {this.props.data.company && this.props.data.menuItems ? <Router>
                <Navbar />
                <Routes />
                <Redirect to='/Home' />
            </Router> :  <Loader active size="massive" />}
            <Footer />
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Form