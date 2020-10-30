import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fam from '../assets/family.png'
class MyApartmentIndex extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>All the Apartments</h3>
        <div
        id="index-body"
        className="form-body"
        style={{
          backgroundImage: `url(${fam})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          { this.props.apartments.map((apartment, index) => {
            return(
              <div key={ index } className="index-card">
                <h3 style={{color: 'white'}}>{ apartment.street }</h3>
                <h3 style={{color: 'white'}}>{ apartment.city }</h3>
                <h3 style={{color: 'white'}}>{ apartment.state }</h3>
                <br />
                <div id="my-buttons">
                  <Link to={`/apartmentshow/${apartment.id}`} className="button">
                    More Info
                  </Link>
                  <Link to={`/apartmentedit/${apartment.id}`} className="button">
                    Edit Listing Info
                  </Link>
                  <br />
                  <span style={{color: 'white'}} onClick={ () => { this.props.deleteApartment(apartment.id) } } className="button">
                    Remove Listing
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default MyApartmentIndex
