import React, { Component } from 'react';
import { Header, Segment, Card, Grid } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';

class Rooms extends Component {

  state = { rooms: [] };

  componentDidMount() {
    axios.get('/api/rooms')
        .then( res => this.setState({ rooms: res.data, }));
  }

  renderRooms = () => {
    return this.state.rooms.map(room => {
      return (
          <Grid.Column key={room.id}>
            <Card>
              <Card.Content>
                <Link to={`/rooms/${room.id}`}>
                  {/* todo: change header???*/}
                  <Header as='h3'>Room Number: {room.room_number}</Header>
                  {/* ada, availability, capacity, price, smoking */}
                </Link>
              </Card.Content>
              <Card.Content>
                  <p>Price: <CurrencyFormat value={room.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                  <p>Capacity: {room.capacity}</p>
                  <p>Availability: {room.availability ? "Available" : "Unavailable"}</p>
              </Card.Content>
            </Card>
          </Grid.Column>
      )
    })
  };

  render() {
    return (
        <div style={{margin: '15px'}}>
          <Segment style={{textAlign:'center'}}>
            <Header as="h1">Rooms</Header>
          </Segment>
          <div>
            <Grid columns="four">
              { this.renderRooms() }
            </Grid>
          </div>
        </div>
    )
  }
}

export default Rooms;