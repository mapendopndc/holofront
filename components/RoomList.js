import { connect } from 'react-redux'

class RoomList extends React.Component {
    render() {
        return (
            <div>Room List</div>
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