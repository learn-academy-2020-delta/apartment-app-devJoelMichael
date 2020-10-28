import React, { Component } from 'react'

import waterGun from '../assets/waterGun.png'

class Header extends Component {
  render() {
    return(
      <>
      <div
      id="header"
      style={{
        backgroundImage: `url(${waterGun})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <h2> Welcome to the Heonn Region </h2>
      </div>
      </>
    )
  }
}
export default Header
