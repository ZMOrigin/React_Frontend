import React from "react"
import RegisterForm from "../RegisterForm/RegisterForm"
import "./Register.css"

class Register extends React.Component {
    render() {
        return <div id="registerContainerWrapper">
            <div id="registerFormContainer" className="container84">
                <RegisterForm />
            </div>
        </div>
    }
}

export default Register