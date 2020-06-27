import { connect } from 'react-redux'
import { authenticate } from '../store/actions/authActions'
import { register } from '../store/actions/authActions'
import { Modal, Form, Button } from 'react-bootstrap'

class ModalForm extends React.Component {

    state = {
        email: '',
        password: '',
        show: false
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
            show: false
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
        if (this.props.form_mode == "Login") {
            this.props.authenticate(userInfo)
        } else {
            this.props.register(userInfo)
        }
        

        const authForm = document.getElementById("authForm")
        authForm.reset()
        this.setState({
            email: '',
            password: ''
        })

        this.handleClose(); // Bug: Must only close if successfully authenticated
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.form_mode}</Modal.Title>
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
                        {this.props.form_mode}
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
        register: (userInfo) => { dispatch(register(userInfo))}
    }
}

export default connect(null, mapDispatchToProps)(ModalForm);