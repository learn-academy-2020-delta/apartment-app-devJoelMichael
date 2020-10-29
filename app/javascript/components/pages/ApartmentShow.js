import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import pic from '../assets/renameMe.jpg'

class ApartmentShow extends Component{
  render(){
    const { apartment } = this.props
    return(
      <React.Fragment>
        <div
        id="show-body"
        style={{
          backgroundImage: `url(${pic})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <div className="show-item-holder">
            <h4> Apartment</h4>
            <p className="show-item">{ apartment.street }</p>
            <p className="show-item">{ apartment.city }, { apartment.state }</p>
            <p className="show-item">Manager Name: { apartment.manager }</p>
            <p className="show-item">Manager Email: { apartment.email }</p>
            <p className="show-item">Price: ${ apartment.price }</p>
            <p className="show-item">Bedrooms: { apartment.bedrooms }</p>
            <p className="show-item">Bathrooms: { apartment.bathrooms }</p>
            <p className="show-item">Are pets allowed: { apartment.pets }</p>
          </div>
          { !this.props.logged_in &&
          <Link to={"/apartmentindex"} className="button">
            Back to All Apartments
          </Link>
        }
        { this.props.logged_in &&
          <Link to={"/myapartmentindex"} className="button">
            Back to All Apartments
          </Link>
        }
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentShow
