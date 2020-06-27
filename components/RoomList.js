import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import ModalRoom from './ModalRoom'

class RoomList extends React.Component {

    state = {
        show: false,
        dummy: [
            {id: 1, name: 'black swan'},
            {id: 2, name:' bumblebee'},
            {id: 3, name: 'pineapple'}
        ]
    }

    handleShow = (roomInfo) => {
        console.log("You clicked on " + roomInfo.name)
        this.setState({
            show: true,
            form_mode: roomInfo
        }, () => {
            this.setState({
                show: false,
                form_mode: roomInfo
            })
        })
    }

    render() {
        const { show, roomInfo, dummy } = this.state
        return (
            <>
            {dummy && dummy.map(room => {
                return (
                    <Card key={room.id}>
                        <Card.Body>{room.name}
                            <Button variant="primary" className="float-right" onClick={() => this.handleShow(room)}>Invite</Button>
                        </Card.Body>
                    </Card>
                )
            })}

            <ModalRoom show={show} roomInfo={roomInfo}/>

            </>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(RoomList);