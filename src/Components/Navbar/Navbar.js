import React, { Component } from 'react'
import { 
    Menu, 
    Segment, 
    Image, 
    Search, 
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: 'Home',
        }
    }

    handleClick = (e, { name }) => {
        this.setState({
            selection: name
        })
    }

    render = () => {
        const p = this.props

        return <Segment className='menuContainer fixedTop'>
            <Menu secondary className='container90'>
                <Menu.Header>
                    <Image src={p.logo} alt='...' />
                </Menu.Header>
                {p.menuItems.map((name) => {
                    return <Menu.Item as={Link}
                        className='ZMButton'
                        name={name}
                        onClick={this.handleClick}
                        active={this.state.selection === name}
                        to={'/' + name} />
                })}
                <Menu.Menu className='floatRight'>
                    <Search className='searchBox' />
                    <Menu.Item as={Link}
                        to='/User'
                        name='User'
                        onClick={this.handleClick}
                        active={this.state.selection === 'User'}
                        className='menuIcons'
                    >
                        <Icon name='user' size='large' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    }
}