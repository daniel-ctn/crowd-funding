import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useDisconnect } from '@thirdweb-dev/react'

import { createCampaign, dashboard, payment, withdraw, profile, logout } from '@assets'

import './Sidebar.css'

const Sidebar: FC = () => {
  const disconnect = useDisconnect()

  return (
    <div className="sidebar-container">
      <div className="sidebar-menu">
        <NavLink to="/">
          <img src={dashboard} alt="Dashboard" />
          Dashboard
        </NavLink>
        <NavLink to="/create">
          <img src={createCampaign} alt="Dashboard" />
          Create
        </NavLink>
        <NavLink to="/">
          <img src={payment} alt="Payment" />
          Payment
        </NavLink>
        <NavLink to="/">
          <img src={withdraw} alt="Withdraw" />
          Withdraw
        </NavLink>
        <NavLink to="/">
          <img src={profile} alt="Profile" />
          Profile
        </NavLink>
        <button onClick={disconnect}>
          <img src={logout} alt="Log out" />
          Log out
        </button>
      </div>
    </div>
  )
}

export default Sidebar
