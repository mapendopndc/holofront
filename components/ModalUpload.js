import { connect } from 'react-redux'
import { Modal, Form, Button } from 'react-bootstrap'
import { create_room } from '../store/actions/roomActions'

class ModalForm extends React.Component {

    state = {
        roomName: '',
        file: null,
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

    handleSubmit = (e) => {
        e.preventDefault()

        const roomData = new FormData()
        roomData.append('name', this.state.roomName)
        roomData.append('arModel', file)

        this.props.create_room(roomData, this.props.token);

        const authForm = document.getElementById("roomForm")
        authForm.reset()
        this.setState({
            ...this.state,
            roomName: ''
        })

        this.handleClose(); // Bug: Must only close if successfully authenticated
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleSubmit} id="roomForm">
                    <Form.Group>
                        <Form.Label>Room name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Room Name" name="roomName" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="AR Model (.zip)" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="float-right">
                        Create
                    </Button>
                </Form>
            </Modal.Body>
            </Modal>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create_room: (roomInfo) => { dispatch(create_room(roomInfo))}
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);