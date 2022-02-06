import React from "react"
import { Card, Image, Grid } from "semantic-ui-react"
import "./CardGroup.css"
import UserModal from "../UserModal/UserModal"

class CardGroup extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return <div className="container84 cardWrapper">
            <Grid columns={3}>
                <Grid.Row>
                    {this.props.users.map(user => {
                        return <Grid.Column>
                            <Card className="userCards">
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <Image src={user.avatar} />
                                        </Grid.Column>
                                        <Grid.Column width={10}>
                                            <Card.Content>
                                                <Card.Header>{user.name.firstName} {user.name.lastName}</Card.Header>
                                                <Card.Meta>
                                                    Gender: {user.gender}
                                                </Card.Meta>
                                                <div className="specialties">
                                                    {user.specialty.map(ele => {
                                                        return <div className="specialty">{ele}</div>
                                                    })}
                                                </div>
                                            </Card.Content>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Card.Description>
                                    {user.intro.substring(0, 65) + "..."}
                                </Card.Description>
                                <div extra>
                                    <UserModal user={user}/>
                                </div>
                            </Card>
                        </Grid.Column>
                    })}
                </Grid.Row>
            </Grid>
        </div>
    }
}

export default CardGroup