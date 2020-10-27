import React, { Component } from 'react'

class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <h1> Apartment Index </h1>
        {this.props.apartments.map((apartment, index) => {
          return (
            <div>
              <h3>{apartment.street}</h3>
              <h3>{apartment.city}</h3>
              <h3>{apartment.price}</h3>
              // <Link to={`/apartmentshow/${apartment.id}`}
              // className="button">
              // More Info
              // </Link>
            </div>
          )
        })}
      </>
    )
  }
}
export default ApartmentIndex
