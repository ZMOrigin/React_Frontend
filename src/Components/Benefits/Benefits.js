import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

class Benefits extends React.Component {
    render() {
        return <div id='benefitsContainer'>
            <h1 id="benefitsTitle">Why you should join us?</h1>
            <Grid className='container90'>
                <Grid.Row>
                    {this.props.data.company.benefits.map(ele => {
<<<<<<< HEAD
                        return <Grid.Column width={4} className="cardContainer">
=======
                        return <Grid.Column width={4} key={ele.title}>
>>>>>>> aa2988a7abede61a8b11f089b0670594f1b10fdc
                            <Card className="benefitsCard" >
                                <Card.Content>
                                    <Icon name={ele.icon} style={{color: "white"}} size="huge"/>
                                </Card.Content>
                                <Card.Content className="fontWhite" >
                                    <Card.Header style={{color: "white"}}>{ele.title}</Card.Header>
                                    <Card.Description style={{color: "white"}}>
                                        {ele.intro}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    })}
                </Grid.Row>
            </Grid>
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    null
)(Benefits);

export default Form