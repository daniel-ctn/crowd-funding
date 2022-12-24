import Sidebar from '@components/layout/Sidebar'
import Navbar from '@components/layout/Navbar'

import './App.css'

export default function Home() {
  return (
    <main className="container">
      <div className="left-sidebar">
        <Sidebar/>
      </div>
      <div className="right-content">
        <Navbar />
      </div>
    </main>
  )
}
