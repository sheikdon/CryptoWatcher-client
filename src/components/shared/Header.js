import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'


const navColor = {
	backgroundColor: 'rgb(122, 111, 155)'
}


const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
		<>
		<Nav.Link>
			<Link to='/WatchList' style={linkStyle}>
				WatchList
			</Link>
		</Nav.Link>
	</>
	</>
)

const Header = ({ user }) => (
	<Navbar style={ navColor } variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
			<img src="https://images.axios.com/3HFhZNXBvnujn16bjk28r6MBU3k=/448x0:1528x1080/1366x1366/2022/11/09/1668032836033.jpg" />
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
