import { FC } from 'react'

import profileIcon from '@assets/profile.svg'
import dashboardIcon from '@assets/dashboard.svg'
import createCampaignIcon from '@assets/create-campaign.svg'
import paymentIcon from '@assets/payment.svg'
import withdrawIcon from '@assets/withdraw.svg'
import logoutIcon from '@assets/logout.svg'

import './Sidebar.css'

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        <li>
          <img src={dashboardIcon} alt="Dashboard" />
          Dashboard
        </li>
        <li>
          <img src={createCampaignIcon} alt="Dashboard" />
          Create
        </li>
        <li>
          <img src={paymentIcon} alt="Payment" />
          Payment
        </li>
        <li>
          <img src={withdrawIcon} alt="Withdraw" />
          Withdraw
        </li>
        <li>
          <img src={profileIcon} alt="Profile" />
          Profile
        </li>
        <li>
          <img src={logoutIcon} alt="Log out" />
          Log out
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
