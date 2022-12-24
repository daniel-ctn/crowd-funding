import { ConnectWallet } from '@thirdweb-dev/react'

import './App.css'

export default function Home() {
  return (
    <main className="container">
      <div className="w-48">
        <ConnectWallet />
      </div>
      <h2 className="heading-3">Daniel</h2>
    </main>
  )
}
