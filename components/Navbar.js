import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import Link from 'next/link'

const Navbar = () => (
    <div>
        <NavBar bg="light">
            <NavBar.Brand>Holospace</NavBar.Brand>
            <Nav className="ml-auto">
                <Link href="/register" passHref>
                    <Nav.Link>Register</Nav.Link>
                </Link>
                <Link href="/login" passHref>
                    <Nav.Link>Login</Nav.Link>
                </Link>
            </Nav>
        </NavBar>
    </div>
)

export default Navbar;