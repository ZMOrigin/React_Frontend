import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions/index'
import {
    Menu,
    Segment,
    Image,
    Search,
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

let mapDispatchToProps = (dispatch) => {
    return {
        changePage: page => dispatch(changePage(page))
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        data: state.data
    }
}

class Navbar extends Component {
    handleClick = (e, { name }) => {
        this.props.changePage( name )
        // console.log(this.props.page)
    }

    render = () => {
        return <Segment className='menuContainer'>
            <Menu secondary className='container90'>
                <Menu.Header as={Link} to='/Home'>
                    <Image src={this.props.data.company.logo} alt='...' />
                </Menu.Header>
                {this.props.data.menuItems.map((name) => {
                    return <Menu.Item as={Link}
                        key={name}
                        className='ZMButton'
                        name={name}
                        onClick={this.handleClick}
                        active={this.props.page === name}
                        to={'/' + name} />
                })}
                <Menu.Menu className='floatRight'>
                    <Search className='searchBox' placeholder='Search...' />
                    <Menu.Item as={Link}
                        to='/User'
                        name='User'
                        onClick={this.handleClick}
                        active={this.props.page === 'User'}
                        className='menuIcons'
                    >
                        <Icon name='user' size='large' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)

export default Form