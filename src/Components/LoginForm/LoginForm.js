import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validPassword: false,
            validEmail: false
        }
    }

    validateEmail = (e) => {
        if (e.target.value.includes("@") && e.target.value.split("@")[1].includes(".")) {
            this.setState({
                validEmail: true
            })
        } else {
            this.setState({
                validEmail: false
            })
        }
        // check if the user is already registered
        // if(db = app.find('/users)...e.target.value) {
        //     e.target.error = {content:"Email already registered", pointing: "down"}
        //     response = false
        // }
    }

    validatePassword = (e) => {
        let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        let specials = ["-", "_", "/", "!", "@", "#", "$", "%", "&", "*"]

        let containsUpper = !(e.target.value === e.target.value.toLowerCase())
        let containsNum = nums.find(num => {
            return e.target.value.includes(num)
        })
        let containsSpecial = specials.find(special => {
            return e.target.value.includes(special)
        })

        if ((e.target.value.length >= 8) && containsNum && containsSpecial && containsUpper) {
            this.setState({
                validPassword: true
            })
        } else {
            this.setState({
                validPassword: false
            })
        }
    }

    handleSubmit = () => {

    }

    render = () => {

        return <Segment id="loginContainer">
            <Form id="loginForm">
                <Form.Input type='text' fluid label='email' placeholder='email' id='loginInputEmail' onChange={this.validateEmail} />
                <Form.Input type='password' fluid label='password' placeholder='password' id='loginInputPassword' onChange={this.validatePassword} />
            </Form>
            <Button fluid className={this.state.validEmail && this.state.validPassword ? "" : "disabled"} id="loginSubmit" type='submit'>Login</Button>
            <div id="loginFormOptions">
                <Link to="/Recover">Forgot password?</Link>
                <span> | </span>
                <Link to="/Register">Register new account!</Link>
            </div>
        </Segment>
    }
}

export default LoginForm