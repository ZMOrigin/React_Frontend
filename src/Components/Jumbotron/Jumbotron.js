import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions/index'
import "./Jumbotron.css"

let mapDispatchToProps = (dispatch) => {
    return {
        changePage: page => dispatch(changePage(page))
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

class Jumbotron extends React.Component {
    handleClick = (e, { name }) => {
        this.props.changePage(name)
    }

    render() {
        return <div id='jumboContainer' className='container84'>
            <h1 className='jumboTitle'>{this.props.data.company.slogan}</h1>
            <h1 className='jumboSubTitle'>{this.props.data.company.intro}</h1>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Button onClick={this.handleClick} as={Link} name="Teachers" className='jumboButton' to='/Teachers'>Teachers</Button>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Button onClick={this.handleClick} as={Link} name="Students" className='jumboButton' to='/Students'>Students</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Jumbotron);

export default Form