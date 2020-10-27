import React, { Component } from 'react'

class ApartmentShow extends Component {
  render() {
    cosnt { apartment } = this.props
    return(
      <>
      <h1> Apartment Show </h1>
      <p>{apartment.street}</p>
      <p>{apartment.city}</p>
      <p>{apartment.state}</p>
      <p>{apartment.Manager}</p>
      <p>{apartment.email}</p>
      <p>{apartment.price}</p>
      <p>{apartment.bedrooms}</p>
      <p>{apartment.bathrooms}</p>
      <p>{apartment.pets}</p>
      </>
    )
  }
}
export default ApartmentShow
