import NavBar from 'react-bootstrap/Navbar'
import {Nav, Button, Modal} from 'react-bootstrap'
import ModalUpload from './ModalUpload'

class Optionsbar extends React.Component {

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
        const { show } = this.state
        return (
            <>
            <NavBar bg="light">
                <NavBar.Brand>Holospace</NavBar.Brand>
                <Nav className="ml-auto">
                    <Button variant="primary" onClick={() => this.handleShow("Register")}>
                        New Room
                    </Button>
                    <Button variant="light" onClick={() => this.handleShow("Login")}>
                        Logout
                    </Button>
                </Nav>
            </NavBar>

            <ModalUpload show={show} />
            </>
        )
    }

}

export default Optionsbar;