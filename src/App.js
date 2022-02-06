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
// import { socket } from './client'
import axios from 'axios'

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
        const dataReqConfig = {
            baseUrl: 'http://localhost:3131',
            url: 'http://localhost:3131/appData',
            method: 'get',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NDQxNTgwMjYsImV4cCI6MTY0NDI0NDQyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjFmZWI2N2NiMWJjNzkxMTYwNmEwNDc0IiwianRpIjoiMjI1NWY2ZjItMDY2Zi00ZWE3LWEyZGYtNDMzMzc2ZjM5YmU4In0.92QpbxYqlM54y9hYwH9R7zPGTe6JeMm2cxHbmzOOLMI'
            }
        }
        axios(dataReqConfig).then(res => {
            const data = res.data.data[0]
            this.props.setData(data)
        })
        const usersReqConfig = {
            baseUrl: 'http://localhost:3131',
            url: 'http://localhost:3131/users',
            method: 'get',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NDQxNTgwMjYsImV4cCI6MTY0NDI0NDQyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjFmZWI2N2NiMWJjNzkxMTYwNmEwNDc0IiwianRpIjoiMjI1NWY2ZjItMDY2Zi00ZWE3LWEyZGYtNDMzMzc2ZjM5YmU4In0.92QpbxYqlM54y9hYwH9R7zPGTe6JeMm2cxHbmzOOLMI'
            }
        }
        axios(usersReqConfig).then(res => {
            const users = res.data.data
            this.props.setUsers(users)
        })
        // socket.emit("get", "appData", "5f466cc18596f6242caa02b4", (e, data) => {
        //     this.props.setData(data)
        //     console.log("data: ")
        //     console.log(data)
        // })

        // socket.emit("get", "users", "5f43a76cf9827034dc5cc701", (e, data) => {
        //     this.props.setUsers(data)
        //     console.log("users: ")
        //     console.log(data)
        // })
        // console.log("users: ")
        // console.log(this.state.users)
        const users = [{
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math", "blabla", "hello", "aloha", "sawadika"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Teacher",
            specialty: ["English", "Math", "blabla", "hello", "aloha", "sawadika"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }, {
            name: {
                firstName: "Bill",
                lastName: "Zhang"
            },
            email: "Bill-Yunjie-Zhang@outloo.com",
            password: "123456qwerty",
            wechat: "Bill_YJ_Zhang",
            gender: "Male",
            avatar: "https://picsum.photos/400",
            country: "China",
            language: ["Chinese", "English"],
            role: "Student",
            specialty: ["English", "Math"],
            intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        }]
        this.props.setUsers(users)
    }

    render = () => {
        return <div className="App">
            {this.props.data.company && this.props.data.menuItems ? <Router>
                <Navbar />
                <Routes />
                <Redirect to='/Home' />
            </Router> : <Loader active size="massive" />}
            <Footer />
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Form