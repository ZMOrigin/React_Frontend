import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import { Loader } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { setData, setStudents, setTeachers, setLogin } from "./Redux/Actions/index"
import { connect } from 'react-redux'
import axios from 'axios'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data)),
        setStudents: students => dispatch(setStudents(students)),
        setTeachers: teachers => dispatch(setTeachers(teachers)),
        setLogin: () => dispatch(setLogin()),
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

        axios.get('http://localhost:3131/appData').then(res => {
            const data = res.data.data[0]
            console.log("data: ", data)
            this.props.setData(data)
        })
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

        
    }

    componentDidMount = this.props.setLogin()

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