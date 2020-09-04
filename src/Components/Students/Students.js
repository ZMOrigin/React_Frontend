import React from 'react'
import { connect } from 'react-redux'
import CardGroup from "../CardGroup/CardGroup"

const mapStateToProps = (state) => {
    const students = state.users.filter(user => {
        return user.role === "Student"
    })
    return {
        users: students
    }
}

class Students extends React.Component {
    render() {
        return <div>
            <CardGroup users={this.props.users} />
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    null
)(Students)

export default Form