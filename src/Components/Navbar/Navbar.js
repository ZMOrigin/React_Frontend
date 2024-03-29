import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../../Redux/Actions/index'
import Logo from '../../Assets/Images/ZM_Logo_White.png'
import './Navbar.css'
import {
    Menu,
    Segment,
    Image,
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'

let mapDispatchToProps = (dispatch) => {
    return {
        changePage: page => dispatch(changePage(page))
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        data: state.data,
        loggedIn: state.loggedIn
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openSearch: false,
            atTop: true
        }
    }


    listenScrollEvent = (e) => {
        if (window.scrollY < 100) {
            this.setState({
                atTop: true
            })
        } else {
            this.setState({
                atTop: false
            })
        }
        console.log(this.state.atTop)
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    handleClick = (e, { name }) => {
        this.props.changePage(name)
    }

    toggleSearch = (e) => {
        this.setState({
            search: !this.state.search
        })
    }

    render = () => {
        return <Segment id='menuContainer' className={!this.state.atTop ? 'white' : null}>
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
                        to= {this.props.loggedIn ? '/Profile' : '/Login'}
                        name='Login'
                        onClick={this.handleClick}
                        active={this.props.page === 'Login' || this.props.page === 'Profile'}
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