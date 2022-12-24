import Sidebar from '@components/layout/Sidebar'
import Navbar from '@components/layout/Navbar'
import MainContent from '@container/home/MainContent'

import './App.css'

export default function Home() {
  return (
    <main className="container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="right-content">
        <Navbar />
        <MainContent />
      </div>
    </main>
  )
}
