import { FC } from 'react'

import logoIcon from '@assets/logo.svg'

import './Navbar.css'

const Navbar: FC = () => {
  return (
    <div className="navbar-container">
      <img src={logoIcon} alt="Website logo" />
      <h1 className="heading-2">D Funding</h1>
    </div>
  )
}

export default Navbar
