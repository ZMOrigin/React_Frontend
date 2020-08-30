import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Card, Icon } from 'semantic-ui-react'
import './Benefits.css'


const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

class Benefits extends React.Component {
    render() {
        return <div id='benefitsContainer'>
            <div className="container84" id="benefitsHeader">
                <div class="pointBars"></div>
                <h3 id="benefitsTitle">Why you should join us?</h3>
            </div>
            <Grid className='container84'>
                <Grid.Row columns={3}>
                    {this.props.data.company.benefits.map(ele => {
                        return <Grid.Column key={ele.title} className="cardContainer">
                            <Icon name={ele.icon} style={{ color: "#b6b6b6" }} size="massive" />
                            <h2 className="benefitsDetails">{ele.intro}</h2>
                        </Grid.Column>

                        // return <Grid.Column width={4} key={ele.title} className="cardContainer">
                        //     <Card className="benefitsCard" >
                        //         <Card.Content>
                        //             <Icon name={ele.icon} style={{ color: "black" }} size="huge" />
                        //         </Card.Content>
                        //         <Card.Content >
                        //             <Card.Header style={{ color: "black" }}>{ele.title}</Card.Header>
                        //             <Card.Description style={{ color: "black" }}>
                        //                 {ele.intro}
                        //             </Card.Description>
                        //         </Card.Content>
                        //     </Card>
                        // </Grid.Column>
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