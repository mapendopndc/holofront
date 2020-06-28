import { connect } from 'react-redux'
import { authenticate, register } from '../store/actions/authActions'
import { invite } from '../store/actions/roomActions'
import { Modal, Form, Button } from 'react-bootstrap'
import '../styles/modalroom.css'

class ModalRoom extends React.Component {

    state = {
        email: '',
        show: false,
        btnText: "Copy Room Code"
    }

    componentDidUpdate() {
        if (this.props.show) {
            this.setState({
                ...this.state,
                show: true
            })
        }
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            show: false
        })
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleCopy = (e) => {
        e.persist()
        navigator.clipboard.writeText(this.props.roomInfo._id)
        .then(res => {
            console.log("Copied " + this.props.roomInfo._id + " to clipboard")
            this.setState({
                ...this.state,
                btnText: "Copied"
            })
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.invite(this.state.email, this.props.roomInfo, this.props.token)

        const authForm = document.getElementById("authForm")
        authForm.reset()
        this.setState({
            ...this.state,
            email: ''
        })

        this.handleClose(); // Bug: Must only close if successfully authenticated
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Friend to Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" className="copy d-flex justify-content-center" onClick={this.handleCopy}>
                    {this.state.btnText}
                </Button>
                <Form onSubmit={this.handleSubmit} id="authForm">
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your friend's email address" name="email" onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="float-right">
                        Invite
                    </Button>
                </Form>
            </Modal.Body>
            </Modal>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (userInfo) => { dispatch(authenticate(userInfo))},
        register: (userInfo) => { dispatch(register(userInfo))},
        invite: (email, roomInfo, token) => { dispatch(invite(email, roomInfo, token))}
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoom);