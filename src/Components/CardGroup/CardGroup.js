import React from "react"
import { Card, Image, Grid } from "semantic-ui-react"
import "./CardGroup.css"
import UserModal from "../UserModal/UserModal"

class CardGroup extends React.Component {

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
                                                <Card.Header>{user.name}</Card.Header>
                                                <Card.Meta>
                                                    Gender: {user.gender}
                                                </Card.Meta>
                                                <div>
                                                    <Card.Description>costs: {user.costsExpectation}</Card.Description>
                                                </div>
                                                <div className="specialties">
                                                    {user.areas.map(ele => {
                                                        return <div className="specialty">{ele}</div>
                                                    })}
                                                </div>
                                            </Card.Content>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                <Card.Description>
                                    {user.specifications.substring(0, 65) + "..."}
                                </Card.Description>
                                <div extra>
                                    {/* {console.log("lalala: ", this.props.role)} */}
                                    <UserModal user={user} role={this.props.role}/>
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