import React from 'react'
import { connect } from 'react-redux'
import CardGroup from "../CardGroup/CardGroup"

const mapStateToProps = (state) => {
    const teachers = state.teachers
    // const teachers = state.users.filter(user => {
    //     return user.role === "Teacher"
    // })
    return {
        teachers: teachers
    }
}

class Teachers extends React.Component {
    render() {
        return <div>
            <CardGroup users={this.props.teachers} role={"teacher"} />
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    null
)(Teachers)

export default Form