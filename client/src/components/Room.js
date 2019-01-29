import React from 'react';
import axios from 'axios';
import { Header, Segment, Card, Grid , Container, CardContent} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import Rooms from './components/Rooms'
import CurrencyFormat from 'react-currency-format';

class Room extends React.Component {
    state = {room:{}}

    componentDidMount() {
        axios.get(`/api/rooms/${this.props.match.params.id}`)
            .then( res => this.setState({ room: res.data, }));

    }

      render() {
          const {room_number,price, capacity,availability} = this.state.room
        return (
            <Card class>
                <Card.Content>
                    <Header as="h2">Room Number {room_number}</Header>
                </Card.Content>
                <CardContent>
                  <p>Price: <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                  <p>Capacity: {capacity}</p>
                  <p>Availability: {availability ? "Available" : "Unavailable"}</p>
              </CardContent>
            </Card>
        )
    }
}

export default Room;