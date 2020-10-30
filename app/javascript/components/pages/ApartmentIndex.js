import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import indie from '../assets/wallPaper.png'
import ash from '../assets/ash.gif'
import trainer from '../assets/trainer.png'

class ApartmentIndex extends Component{
  render(){
    console.log(this.props.apartments)
    return(
      <React.Fragment>
        <div
        id="index-body"
        style={{
          backgroundImage: `url(${indie})`,
          backgroundColor: 'alpha(0.7)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderImageSource: `url(${trainer})`,
          borderImageWidth: '10px'
        }}
        className="flex-container"
        >
          { this.props.apartments.map((apartment, index) => {
            return(
              <div
              key={ index }
              className="flex-item"
              style={{
                backgroundImage: `url(${ash})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat'
              }}
              >
                <h3 className="index-parts">{ apartment.street }</h3>
                <h3 className="index-parts">{ apartment.city }</h3>
                <h3 className="index-parts">{ apartment.state }</h3>
                <br />
                <Link to={`/apartmentshow/${apartment.id}`} className="button">
                  More Info
                </Link>
              </div>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default ApartmentIndex
