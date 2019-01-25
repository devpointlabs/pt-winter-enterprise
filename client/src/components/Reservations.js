import React, { Component } from 'react';
import { Header, Segment, Card, Grid } from 'semantic-ui-react';
import axios from 'axios';

class Reservations extends Component {
  state = { reservations: [] };

  componentDidMount() {
    axios.get('/api/reservations')
        .then( res => this.setState({ reservations: res.data, }));
  }

  renderReservations = () => {
    return this.state.reservations.map(reservation => {
      return (
          <Grid.Column key={reservation.id}>
            <Card>
              <Card.Content>
                  <p>Start Date: {reservation.start_date} </p>
                  <p>End Date: {reservation.end_date} </p>
                  <p>Adults: {reservation.adults} </p>
                  <p>Child: {reservation.child} </p>
                  <p>User Id: {reservation.user_id} </p>
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