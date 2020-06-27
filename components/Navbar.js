import NavBar from 'react-bootstrap/Navbar'
import {Nav, Button, Modal, Form} from 'react-bootstrap'
import { connect } from 'react-redux'
import { authenticate } from '../store/actions/authActions'

class Navbar extends React.Component {

    state = {
        show: false,
        form_mode: "Login",
        email: '',
        password: ''
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            show: false
        })
    }
    handleShow = (mode) => {
        this.setState({
            show: true,
            form_mode: mode
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            email: this.state.email,
            password: this.state.password
        }
        
        this.props.authenticate(userInfo);

        const authForm = document.getElementById("authForm")
        authForm.reset()
        this.setState({
            show: false,
            form_mode: "Login",
            email: '',
            password: ''
        })
    }

    render() {
        const { show, form_mode } = this.state
        return (
            <>
                <NavBar bg="light">
                    <NavBar.Brand>Holospace</NavBar.Brand>
                    <Nav className="ml-auto">
                        <Button variant="primary" onClick={() => this.handleShow("Register")}>
                            Register
                        </Button>
                        <Button variant="light" onClick={() => this.handleShow("Login")}>
                            Login
                        </Button>
                    </Nav>
                </NavBar>

                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{form_mode}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.handleSubmit} id="authForm">
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="float-right">
                            {this.state.form_mode}
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (userInfo) => { dispatch(authenticate(userInfo, "login"))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);