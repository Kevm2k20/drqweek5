import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import {Content} from './components/content';
import { Read } from './components/Read.2.js';
import { Create } from './components/create.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Start of the Navbar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

          <br />
          {/* Switch statement for changing components in the navbar */}
          <Switch>
            {/* Route to the home page with the Content component */}
            <Route path='/' component={Content} exact></Route>
            {/* Route to the create page with the Create Component */}
            <Route path='/create' component={Create} exact></Route>
            {/* Route to the read page with the Footer Component*/}
            <Route path='/read' component={Read} exact></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;