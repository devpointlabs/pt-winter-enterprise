import React,{ Fragment }  from 'react';
import axios from 'axios';
import { Header, Image, Card, Container, CardContent, Grid, Icon} from 'semantic-ui-react';
import CurrencyFormat from 'react-currency-format';
import styled, { keyframes } from 'styled-components';


class Room extends React.Component {
    state = {room:{}}

    componentDidMount() {
        axios.get(`/api/rooms/${this.props.match.params.id}`)
            .then( res => this.setState({ room: res.data, }));

    }

      render() {
          const {room_number,price, capacity,availability} = this.state.room
        return (

            <Fragment>

                <Grid>
                    <Grid.Row columns={2} relaxed='very'>
                        <Grid.Column stretched >
                            <Header as="h1" textAlign='center'> Queen Suite | Room # {room_number} </Header>
                            <Image src= "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" size='big' centered />
                        </Grid.Column>
                            

                        <Grid.Column>
                            <Container fluid>
                        <Header as="h2">Room Details </Header>
                            <p> Our Spacious Non-Smoking Queen Suites feature 512 sq. ft. of 
                                warm inviting décor designed to make your business or leisure 
                                trip as comfortable and relaxing as possible. This suite is 
                                equipped with a queen bed furnished with sleek white comforters 
                                and linens. This suite features a TV in both the bedroom and 
                                sitting room, couch or two chairs in the separate sitting room, 
                                business desk and comfortable office chair that are great for 
                                getting work or reading done. SNQ 
                                Additional Amenities: Complimentary Wi-Fi </p>
                        </Container>
                        <Grid divided='vertically'>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Card>
                                        <Card.Content>
                                            <p> <Icon name='money' /> Price: <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                                <Grid.Column>
                                    <Card>
                                        <Card.Content>
                                            <p> <Icon name='hotel' /> Capacity: {capacity}</p>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>

                                <Grid.Column>
                                    <Card>
                                        <Card.Content>
                                            <p> <Icon name='jenkins' /> Availability: {availability ? "Available" : "Unavailable"}</p>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                        
                            <Header as="h2">Room Facilities </Header>
                        
                            <p> Tea and Coffee Maker <Icon name='coffee' /> </p> 
                            <p> Tv <Icon name='tv' /> </p> 
                            <p> Wifi <Icon name='wifi' /> </p>
                            <p> Phone <Icon name='phone' /> </p> 
                      

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                

            </Fragment>
        )
    }
}


export default Room;