import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'



const navColor = {
	backgroundColor: 'white',
}


const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}

const authenticatedOptions = (
	<>
	<Nav.Item>
			<Link to='/WatchList' style={linkStyle}>
				Trending
			</Link>
		</Nav.Item>
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
		<Nav.Item>
			<Link to='/' style={linkStyle}  className='m-4'>
				Home
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar style={ navColor } variant='dark' expand='md'>
		<Navbar.Brand >
            <Link to='/' style={linkStyle}>
			
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
