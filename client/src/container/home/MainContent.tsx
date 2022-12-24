import { FC } from 'react'

import searchIcon from '@assets/search.svg'

import './MainContent.css'

const MainContent: FC = () => {
  return (
    <div className="main-content__wrapper">
      <div className="input-container">
        <input type="text" className="input-container__input" placeholder="Search by name"/>
        <button className="input-container__btn">
          Search
          <img src={searchIcon} alt="Search" className="w-4"/>
        </button>
      </div>
    </div>
  )
}

export default MainContent
