import React from 'react'
import { Grid } from 'semantic-ui-react'
import "./Me.css"

class Me extends React.Component {
    render() {
        return <Grid celled="internally">
            <Grid.Row>
                <Grid.Column width={10}>
                    <h1>Hello</h1>
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Mother Fucker</h2>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

export default Me