import { FC, useState } from 'react'
import { ConnectWallet, useAddress, useMetamask } from '@thirdweb-dev/react'

import logoIcon from '@assets/logo.svg'

import './Navbar.css'

const Navbar: FC = () => {
  const connect = useMetamask()
  const address = useAddress()

  console.log({ address })

  return (
    <div className="navbar-container">
      <h1 className="heading-1 navbar-heading">Crowd Funding</h1>
      <img src={logoIcon} alt="Website logo" className="w-10" />
      {address ? (
        <button className="primary-btn">Create a campaign</button>
      ) : (
        <div className="w-52">
          <ConnectWallet />
        </div>
      )}
    </div>
  )
}

export default Navbar
