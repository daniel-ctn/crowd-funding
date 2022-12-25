import { Route, Routes } from 'react-router-dom'

import Home from '@pages/Home'
import CreateCampaign from '@pages/CreateCampaign'

import Sidebar from '@components/layout/Sidebar'
import Navbar from '@components/layout/Navbar'

import './App.css'

export default function App() {
  return (
    <main className="container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="right-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCampaign />} />
        </Routes>
      </div>
    </main>
  )
}
