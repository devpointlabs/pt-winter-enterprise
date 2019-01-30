import React, { Fragment } from 'react';
import axios from 'axios';
import { Header, Image, Card, Container, CardContent, Grid, Icon } from 'semantic-ui-react';


class Reservation extends React.Component {
  state = { reservation: {} }

  componentDidMount() {
    axios.get(`/api/reservations/${this.props.match.params.id}`)
      .then(res => this.setState({ reservation: res.data, }));

  }

  render() {
    const { start_date, end_date, adults, child, user_id } = this.state.reservation
    return (

      <Fragment>

        
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
              
              <Grid.Column stretched >
                <Header as="h1" textAlign="center">
                  <p> Adventure of a lifetime! </p>
                </Header>
                            <Image src= "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" size='medium' centered />
                </Grid.Column>

                <Grid.Column>

                  <Header>
                    <p> Reservation Details </p>
                  </Header>
                  <Card>
                    <Card.Content>
                      <p> <Icon name='calendar' /> Start Date : {start_date} </p>
                      <p> <Icon name='calendar alternate' /> End Date: {end_date} </p>
                      <p> <Icon name='hotel' /> Reservation Number: {user_id}</p>
                      <p> <Icon name='plus' /> Adults: {adults} </p>
                      <p> <Icon name='child' /> Kids : {child} </p>

                    </Card.Content>
                  </Card>

                  <Header>
                    <p> Rules of the Road </p>
                  </Header>
                  <Card>
                    <Card.Content>
                      Check in is at 3 pm the day of. Any last second changes may result in late fees.
                    </Card.Content>
                  </Card>

                  <Card>
                    <Card.Content>
                      Address is: 1234 Chubby Kitty Ave, 98765 Yellowstone WY 
                    </Card.Content>
                  </Card>

                      <p> <Icon name='phone' /> Phone Number is: (123) 456-7890 </p>
                </Grid.Column>

                

                

              </Grid.Row>
            </Grid>
            </Fragment>
          )
      }
  }
  
  
  export default Reservation;