import React from 'react'
import LoginForm from '../LoginForm/LoginForm'
import Me from '../Me/Me'
import "./Login.css"

class Login extends React.Component {
    checkLogin = (isLogin) => {
        if (isLogin) {
            return <div id="loginContainerWrapper">
                <Me />
            </div>
        } else {
            return <div id="loginContainerWrapper">
                <div id="loginFormContainer" className="container84">
                    <LoginForm />
                </div>
            </div>
        }
    }

    render() {
        let isLogin = false
        return this.checkLogin(isLogin)
    }
}

export default Login