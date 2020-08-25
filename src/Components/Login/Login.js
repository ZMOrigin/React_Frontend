import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import LoginForm from '../LoginForm/LoginForm'

class Login extends Component {

    render = () => {

        return <Grid className="container90">
            <Grid.Row>
                <Grid.Column width={7}>
                    <Image />
                </Grid.Column>
                <Grid.Column width={9}>
                    <LoginForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

export default Login