import { FC } from 'react'

import profileIcon from '@assets/profile.svg'
import dashboardIcon from '@assets/dashboard.svg'
import createCampaignIcon from '@assets/create-campaign.svg'

import './Sidebar.css'

const Sidebar: FC = () => {
  return (
    <div className="sidebar-container">
      <ul className="menu">
        <li>
          <img src={dashboardIcon} alt="Dashboard" />
          Dashboard
        </li>
        <li>
          <img src={createCampaignIcon} alt="Dashboard" />
          Create
        </li>
        <li>
          <img src={profileIcon} alt="Profile" />
          Profile
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
