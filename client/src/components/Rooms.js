import React, { Component } from 'react';
import { Header, Segment, Icon, Image, Card, Grid } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import CurrencyFormat from 'react-currency-format';
import NoSmoking from '../icons/No_Smoking.svg';
import Smoking from '../icons/Smoking.svg';
import BackgroundImage from '../images/Morning_Glory_Pool_Yellowstone_National_Park.jpg';

var roomsStyle = {
  width: "100%",
  backgroundImage: `url(${ BackgroundImage })`,
  backgroundSize: "cover",
  borderRadius: ".2rem"
};

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
              <Card.Content style={{backgroundColor: '#F5F5F5'}}>
                <Link to={`/rooms/${room.id}`}>
                  {/* todo: change header???*/}
                  <Header as='h3' >Room Number: {room.room_number}</Header>
                  {/* ada, availability, capacity, price, smoking */}
                </Link>
              </Card.Content>
              <Card.Content>
                  <p><CurrencyFormat value={room.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></p>
                  <p>Capacity: {room.capacity}</p>
                  <p>{room.availability ? "Available" : "Unavailable"}</p>
                  <p>{room.ada ? <Icon name="wheelchair" size='big' color='blue'/> : ""}</p>
                  <p>{room.smoking ? <Image src={Smoking} size='mini' /> : <Image src={NoSmoking} size='mini' />}</p>
              </Card.Content>
            </Card>
          </Grid.Column>
      )
    })
  };

  render() {
    return (
        <div style={{margin: '15px'}}>
          <div>
            <Segment style={{backgroundColor: '#F5F5F5', textAlign:'center'}}>
              <Header as="h1">Rooms</Header>
            </Segment>
            <div style={ roomsStyle }>
              <Grid style={{margin: '15px'}} columns="four">
                { this.renderRooms() }
              </Grid>
            </div>
          </div>
        </div>
    )
  }
}

export default Rooms;
