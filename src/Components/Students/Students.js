import React from 'react'
import { connect } from 'react-redux'
import CardGroup from "../CardGroup/CardGroup"

const mapStateToProps = (state) => {
    // const students = state.users.filter(user => {
    //     return user.role === "Student"
    // })
    const students = state.students
    // console.log("students: ", students)
    return {
        students: students
    }
}

class Students extends React.Component {
    render() {
        console.log("students: ", this.props.students)

        return <div>
            <CardGroup users={this.props.students} role={"student"}/>
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    null
)(Students)

export default Form