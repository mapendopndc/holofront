import { connect } from 'react-redux'
import { deauthenticate } from '../store/actions/authActions'

import NavBar from 'react-bootstrap/Navbar'
import {Nav, Button} from 'react-bootstrap'
import ModalUpload from './ModalUpload'
import '../styles/optionsbar.css'

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

    handleLogout = () => {
        this.props.logout()
    }

    
    render() {
        const { show } = this.state
        return (
            <>
            <NavBar bg="light" fixed="top">
                <NavBar.Brand>Holospace</NavBar.Brand>
                <Nav className="ml-auto">
                    <Button variant="primary" onClick={() => this.handleShow("Register")} className="new-room">
                        New Room
                    </Button>
                    <Button variant="light" onClick={this.handleLogout}>
                        Logout
                    </Button>
                </Nav>
            </NavBar>

            <ModalUpload show={show} />
            </>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(deauthenticate())}
    }
}

export default connect(null, mapDispatchToProps)(Optionsbar);