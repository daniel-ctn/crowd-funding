import { FC, useState } from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'

import logoIcon from '@assets/logo.svg'

import './Navbar.css'

const Navbar: FC = () => {
  const [isConnect, setIsConnect] = useState(true)

  return (
    <div className="navbar-container">
      <h1 className="heading-2 navbar-heading">Crowd Funding</h1>
      <img src={logoIcon} alt="Website logo" className="w-10" />
      {isConnect ? (
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
