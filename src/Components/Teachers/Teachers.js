import React from 'react'
import { connect } from 'react-redux'
import CardGroup from "../CardGroup/CardGroup"

const mapStateToProps = (state) => {
    const teachers = state.users.filter(user => {
        return user.role === "Teacher"
    })
    return {
        users: teachers
    }
}

class Teachers extends React.Component {
    render() {
        return <div>
            <CardGroup users={this.props.users} />
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    null
)(Teachers)

export default Form