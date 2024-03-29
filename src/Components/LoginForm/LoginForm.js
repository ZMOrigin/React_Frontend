import React from 'react'
import { Segment, Form, Button, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import "./LoginForm.css"
import { setLogin } from "../../Redux/Actions/index"
import { connect } from 'react-redux'
import axios from 'axios'

let mapDispatchToProps = (dispatch) => {
    return {
        setLogin: () => dispatch(setLogin()),
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordLen: 0,
            validPassword: false,
            emailLen: 0,
            validEmail: false
        }
    }

    login = async (user, pwd) => {
        console.log(user, pwd)
        const loginReqConfig = {
            baseUrl: 'http://localhost:3131',
            url: 'http://localhost:3131/authentication',
            method: 'post',
            data: {
                'Content-Type': 'application/json',
                'strategy': 'local',
                'email': user,
                'password': pwd
            }
        }

        await axios(loginReqConfig).then(res => localStorage.setItem('jwt', res.data.accessToken))
        this.props.setLogin()
    }

    validateEmail = (e) => {
        this.setState({
            emailLen: e.target.value.length
        })
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

        this.setState({
            passwordLen: e.target.value.length
        })

        let containsUpper = !(e.target.value === e.target.value.toLowerCase())
        let containsNum = nums.find(num => {
            return e.target.value.includes(num)
        })
        let containsSpecial = specials.find(special => {
            return e.target.value.includes(special)
        })

        if ((this.state.passwordLen >= 8) && containsNum && containsSpecial && containsUpper) {
            this.setState({
                validPassword: true
            })
        } else {
            this.setState({
                validPassword: false
            })
        }
    }

    handleSubmit = (e) => {
        this.login(e.target.email.value, e.target.password.value);
    }

    render = () => {
        let popups = {
            email: {
                help: <Popup
                    className="helper"
                    trigger={<Form.Input name='email' type='text' fluid label='Email' placeholder='email' id='loginInputEmail' onChange={this.validateEmail} />}
                    content="email format: 'email@provider.sufix'"
                    on='focus' />,

                invalid: <Popup
                    className="warning"
                    trigger={<Form.Input name='email' type='text' fluid label='Email' placeholder='email' id='loginInputEmail' onChange={this.validateEmail} />}
                    content="invalid email, please make sure the format is correct."
                    on='click' />,

                valid: <Popup
                    className="success"
                    trigger={<Form.Input name='email' type='text' fluid label='Email' placeholder='email' id='loginInputEmail' onChange={this.validateEmail} />}
                    content="This email seems to valid and not yet registered!"
                    on='focus' />
            },
            password: {
                help: <Popup
                    className="helper"
                    trigger={<Form.Input name='password' type='Password' fluid label='Password' placeholder='Password' id='loginInputPassword' onChange={this.validatePassword} />}
                    content={"Passwords must be at least 8 digits long and require at least: \n one(1) lowercase letter(a-z) \n one(1) uppercase letter(A-Z) \n one(1) number(0-9) \n one(1) special character('-', '_', '/', '!', '@', '#', '$', '%', '&', '*')"}
                    on='focus' />,

                invalid: <Popup
                    className="warning"
                    trigger={<Form.Input name='password' type='Password' fluid label='Password' placeholder='Password' id='loginInputPassword' onChange={this.validatePassword} />}
                    content="invalid password, please make sure to meet all requirements."
                    on='focus' />,

                valid: <Popup
                    className="success"
                    trigger={<Form.Input name='password' type='Password' fluid label='Password' placeholder='Password' id='loginInputPassword' onChange={this.validatePassword} />}
                    content="This password meets all requirements!"
                    on='focus' />
            }
        }

        return <Segment id="loginContainer">
            <Form id="loginForm" onSubmit={this.handleSubmit}>
                {this.state.emailLen === 0 ? popups.email.help : this.state.validEmail ? popups.email.valid : popups.email.invalid}
                {this.state.passwordLen === 0 ? popups.password.help : this.state.validPassword ? popups.password.valid : popups.password.invalid}

                <div id="formBottomGroup">
                    <Button fluid className={this.state.validEmail && this.state.validPassword ? "" : "disabled"} id="loginSubmit" type='submit'>Login</Button>
                    <div id="loginFormOptions">
                        <Link to="/Recover">Forgot password?</Link>
                        <span> | </span>
                        <Link to="/Register">Register new account!</Link>
                    </div>
                </div>
            </Form>
        </Segment>
    }
}

const ReduxForm = connect(
    null,
    mapDispatchToProps
)(LoginForm)

export default ReduxForm