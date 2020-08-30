import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
import { Loader } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { setData } from "./Redux/Actions/index"
import { connect } from 'react-redux'
//import getData from './Assets/data'
import { socket } from './client'

let mapDispatchToProps = (dispatch) => {
    return {
        setData: data => dispatch(setData(data))
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        socket.emit("get", "appData", "5f466cc18596f6242caa02b4", (e, data) => {
            this.props.setData(data)
        })
    }

    render = () => {
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