import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import ModalRoom from './ModalRoom'
import '../styles/roomlist.css'

class RoomList extends React.Component {

    state = {
        show: false,
        roomInfo: null
    }

    handleShow = (roomInfo) => {
        this.setState({
            show: true,
            roomInfo
        }, () => {
            this.setState({
                show: false,
                roomInfo
            })
        })
    }

    render() {
        const { show, roomInfo } = this.state
        const { rooms } = this.props
        return (
            <div className="card-container">
            {rooms && rooms.map(room => {
                return (
                    <Card key={room._id} className="room-card">
                        <Card.Body>{room.name}
                            <Button variant="primary" className="float-right" onClick={() => this.handleShow(room)}>Invite</Button>
                        </Card.Body>
                    </Card>
                )
            })}

            <ModalRoom show={show} roomInfo={roomInfo}/>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        rooms: state.room.rooms
    }
}

export default connect(mapStateToProps)(RoomList);