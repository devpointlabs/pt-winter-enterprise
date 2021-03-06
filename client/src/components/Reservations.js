import React, { Component } from 'react';
import { Header, Image, Icon, Segment, Card, Grid } from 'semantic-ui-react';
import axios from 'axios';
import { Link, } from 'react-router-dom';




class Reservations extends Component {
  state = { reservations: [] };

  componentDidMount() {
    axios.get('/api/reservations')
        .then( res => this.setState({ reservations: res.data, }));
  }

  renderReservations = () => {
    return this.state.reservations.map(reservation => {
      return (
        <Grid padded>
          <Grid.Column key={reservation.id}>
            <Card>
              <Card.Content>
              <Link to={`/reservations/${reservation.id}`}>
                  {/* todo: change header???*/}
                  <Header as='h3' >Reservation ID: {reservation.user_id}</Header>
                  {/* ada, availability, capacity, price, smoking */}
              </Link>
                  <p> <Icon name='calendar' /> Start Date: {reservation.start_date} </p>
                  <p> <Icon name='calendar alternate' /> End Date: {reservation.end_date} </p>
                  <p>  <Icon name='plus' /> Adults: {reservation.adults} </p>
                  <p> <Icon name='child' /> Child: {reservation.child} </p>
                  <p> <Icon name='hotel' /> User Id: {reservation.user_id} </p>
              </Card.Content>
            </Card>
          </Grid.Column>
          </Grid>
      )
    })
  };

  render() {
    return (
        <div style={{margin: '15px'}}>
          <Segment style={{textAlign:'center'}}>
            <Header as="h1">Reservations </Header>
          </Segment>
          <div>
            <Grid columns="four">
              { this.renderReservations() }
            </Grid>
          </div>
        </div>
    )
  }
}

export default Reservations;