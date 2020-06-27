import { connect } from 'react-redux'
import { authenticate } from '../store/actions/authActions'
import { Form, Button } from 'react-bootstrap'

class ModalForm extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.authenticate(this.state);

        const authForm = document.getElementById("authForm")
        authForm.reset()
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
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
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (userInfo) => { dispatch(authenticate(userInfo))}
    }
}

export default connect(null, mapDispatchToProps)(ModalForm);