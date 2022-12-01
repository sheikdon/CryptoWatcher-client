import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Search from '../Search'


const navColor = {
	backgroundColor: 'rgb(122, 111, 155)'
}


const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}

const navStyle = {
	paddingRight: '14px',
	display: 'flex',
	flexFlow: 'row wrap',
	color: 'red'
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='coins' style={linkStyle} className='m-4'>
				More Coins
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='change-password' style={linkStyle} className='m-4'>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle} className='m-4'>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		{/* <div className='m-2'>
	<Search/>
	</div> */}
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle} className='m-4'>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle} className='m-4'>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle} >
				Home
			</Link>
		</Nav.Link>
		<>
		<Nav.Link>
			<Link to='/WatchList' style={linkStyle}>
				Trending
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/CoinSearch' style={linkStyle}>
				Search Coins
			</Link>
		</Nav.Link>
	</>
	</>
)

const Header = ({ user }) => (
	<Navbar style={ navColor } variant='dark' expand='md'>
		<Navbar.Brand >
            <Link to='/' style={linkStyle}>
				Crypto Watcher
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Container fluid='md' >
			<Nav className='justify-content-center'>
				{user && (
					<span className='navbar-text mr-2'></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
			</Container>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
