import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import NoMatch from './components/NoMatch'
import About from './components/About';
import Rooms from './components/Rooms';
// import Blog from '/components/Blog';
<<<<<<< HEAD
// import Home from '/components/Home';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';
import Room from './components/Room';
import AuthRoute from './components/AuthRoute';
// import Reservations from './components/Reservations'
// import ReservationForm from './components/ReservationForm';
=======
import Home from './components/Home';
import Room from './components/Room';
// import AuthRoute from './components/AuthRoute';
import Reservations from './components/Reservations'
import ReservationForm from './components/ReservationForm';
>>>>>>> 4443f38842bb6322b4aa0260298ee5421177d50b

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/rooms' component={Rooms} />
      <Route exact path='/rooms/:id' component={Room} />
      {/* <Route exact path='/packages' component={Packages} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/jobs' component={Jobs} />
        <Route exact path='/stay' component={Stay} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/users/:id' component={User} /> */}
      <Route exact path='/reservations' component={Reservations} />
      {/* <Route exact path='/users/:user_id/reservations/:id' component={Reservation} /> */}
      <Route exact path='/reservationform' component={ReservationForm} />
      <Route exact path='/users/:user_id/reservations/:reservation_id/rooms' component={Rooms} />
      <Route exact path='/users/:user_id/reservations/:reservation_id/rooms/:id' component={Room} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;