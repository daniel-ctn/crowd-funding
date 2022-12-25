import { FC } from 'react'

import './Loading.css'

const Loading: FC = () => {
  return (
    <div className="loading-wrapper">
      <div className="loader"></div>
      <h2 className="loading-text">Loading...</h2>
      <p className="loading-sub">This may take a few seconds, please don't close this page.</p>
    </div>
  )
}

export default Loading
