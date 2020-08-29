import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions/index'
import Logo from '../../Assets/Images/ZM_Logo_White.png'
import './Navbar.css'
import {
    Menu,
    Segment,
    Image,
    Button,
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
    constructor(props) {
        super(props)
        this.state = {
            openSearch: false
        }
    }
    handleClick = (e, { name }) => {
        this.props.changePage( name )
        // console.log(this.props.page)
    }

    toggleSearch = (e) => {
        this.setState({
            search: !this.state.search
        })
    }

    render = () => {
        return <Segment id='menuContainer'>
            <Menu secondary className='container84'>
                <Menu.Header id="menuHeader" as={Link} to='/Home'>
                    <Image src={Logo} alt='...' />
                    <h1>Origin</h1>
                </Menu.Header>
                <Menu.Menu className='floatRight'>
                    {this.props.data.menuItems.map((name) => {
                        return <Menu.Item as={Link}
                            key={name}
                            className='NavButton'
                            name={name}
                            onClick={this.handleClick}
                            active={this.props.page === name}
                            to={'/' + name} />
                    })}
                    <div id='navSearch' >
                        <input className={this.state.search ? "searchInput" : "hiddenInput"}></input>
                        <Icon className='searchIcon' size='large' name='search' onClick={this.toggleSearch} />
                    </div>
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