import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { setData } from "./Redux/Actions/index"
import { connect } from 'react-redux'
import getData from './Assets/data'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data))
    }
}

 class App extends React.Component {
    constructor(props) {
        super(props)
        this.props.setData(getData())
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