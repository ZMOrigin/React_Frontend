import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import { Loader } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
// import { setData, setUsers } from "./Redux/Actions/index"
import { setData, setStudents, setTeachers } from "./Redux/Actions/index"
import { connect } from 'react-redux'
//import getData from './Assets/data'
// import { socket } from './client'
import axios from 'axios'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data)),
        setStudents: students => dispatch(setStudents(students)),
        setTeachers: teachers => dispatch(setTeachers(teachers)),
        // setUsers: users => dispatch(setUsers(users))
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data,
        students: state.students,
        teachers: state.teachers
        // users: state.users
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NDQzMDA1MjYsImV4cCI6MTY0NDM4NjkyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjFmZWI2N2NiMWJjNzkxMTYwNmEwNDc0IiwianRpIjoiYmFlNzg1NTUtMTk5My00M2M2LWI0OTYtMDEwMmQ0ZDI0ZjcxIn0.g1e9cuIZpXO-PuHG4mI7f3Kt_wXX4MrfMJNOqU6LFeA'
            }
        }

        axios(dataReqConfig).then(res => {
            const data = res.data.data[0]
            console.log("data: ", data)
            this.props.setData(data)
        })
        // const usersReqConfig = {
        //     baseUrl: 'http://localhost:3131',
        //     url: 'http://localhost:3131/users',
        //     method: 'get',
        //     headers: {
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NDQzMDA1MjYsImV4cCI6MTY0NDM4NjkyNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjFmZWI2N2NiMWJjNzkxMTYwNmEwNDc0IiwianRpIjoiYmFlNzg1NTUtMTk5My00M2M2LWI0OTYtMDEwMmQ0ZDI0ZjcxIn0.g1e9cuIZpXO-PuHG4mI7f3Kt_wXX4MrfMJNOqU6LFeA'
        //     }
        // }
        // axios(usersReqConfig).then(res => {
        //     const users = res.data.data
        //     this.props.setUsers(users)
        // })

        //////////////////////////////
        axios.get('http://localhost:3131/getTeachers').then(res => {
            const teachers = res.data
            console.log("teachers: ", teachers)
            this.props.setTeachers(teachers)
        })

        axios.get('http://localhost:3131/getStudents').then(res => {
            const students = res.data
            console.log("students: ", students)
            this.props.setStudents(students)
        })
        /////////////////////////////

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
        // const users = [{
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math", "blabla", "hello", "aloha", "sawadika"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Teacher",
        //     specialty: ["English", "Math", "blabla", "hello", "aloha", "sawadika"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }, {
        //     name: {
        //         firstName: "Bill",
        //         lastName: "Zhang"
        //     },
        //     email: "Bill-Yunjie-Zhang@outloo.com",
        //     password: "123456qwerty",
        //     wechat: "Bill_YJ_Zhang",
        //     gender: "Male",
        //     avatar: "https://picsum.photos/400",
        //     country: "China",
        //     language: ["Chinese", "English"],
        //     role: "Student",
        //     specialty: ["English", "Math"],
        //     intro: "lorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem ilorem lorem i"
        // }]
        // this.props.setStudents(users)
        // this.props.setTeachers(users)
    }

    render = () => {
        console.log(this.props)

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