import React, { Component } from 'react'

import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

import mockApartments from './mockApartments.js'

import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render() {
    console.log(this.state.apartments)
    const {
      logged_in,
      sign_in_route,
      sign_up_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <h1>Hello World</h1>
        <Header />
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            path="/apartmentindex"
            render={(props) => <ApartmentIndex
              apartments={this.state.apartments} />}
          />
          <Route
            path="/apartmentedit/:id"
            component={ApartmentEdit}
          />
          <Route
            path="/apartmentnew"
            component={ApartmentNew}
          />
          <Route
            path="/apartmentshow/:id"
            render={(props) => {

              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment =>
                apartment.id === parseInt(id))

              <ApartmentShow />
            } }
          />
          <Route
            path="/notfound"
            component={NotFound}
          />
        </Switch>
        <Footer
          logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_up_route={sign_up_route}
          sign_out_route={sign_out_route}
        />
      </Router>
    )
  }
}

export default App
