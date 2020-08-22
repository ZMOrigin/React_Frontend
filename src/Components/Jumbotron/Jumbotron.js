import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions/index'

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
        return <Grid id='jumboContainer' className='container90'>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Image src='https://picsum.photos/300/300' style={{ width: '100%' }} alt='...' />
                </Grid.Column>
                <Grid.Column className='center' width={9}>
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Jumbotron);

export default Form