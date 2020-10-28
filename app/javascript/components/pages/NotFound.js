import React, { Component } from 'react'
import snore from '../assets/fourOhFour.jpg'

class NotFound extends Component {
  render() {
    return(
      <>
      <div id="nf-title">
        <h1> 404 </h1>
      </div>
        <div
        id="nf-body"
        style={{
          backgroundImage: `url(${snore})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
        </div>
      </>
    )
  }
}
export default NotFound
