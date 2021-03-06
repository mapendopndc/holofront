import NavBar from 'react-bootstrap/Navbar'
import {Nav, Button, Modal} from 'react-bootstrap'
import ModalForm from './ModalForm'

class Navbar extends React.Component {

    state = {
        show: false,
        form_mode: "Login"
    }

    handleShow = (mode) => {
        this.setState({
            show: true,
            form_mode: mode
        }, () => {
            this.setState({
                show: false,
                form_mode: mode
            })
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

            <ModalForm show={show} form_mode={form_mode} />
            </>
        )
    }

}

export default Navbar;