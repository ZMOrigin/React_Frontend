import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import "./Login.css"

class Login extends React.Component {
    render() {
        return <div id="loginContainerWrapper">
            <div id="loginFormContainer" className="container84">
                <LoginForm />
            </div>
        </div>
    }
}

export default Login