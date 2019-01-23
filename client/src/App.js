import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import { Container,  } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";




 



const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path="/component/packages"
          render={ () => < Packages/> }
        />
        <Route
          exact
          path="/component/contact"
          render={ () => <Contact/> }
        />
      </Switch>
    </Container>
  </Fragment>
)

export default App;