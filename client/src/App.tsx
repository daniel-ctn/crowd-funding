import { ConnectWallet } from '@thirdweb-dev/react'

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto min-h-screen">
      <div className="w-60">
        <ConnectWallet />
      </div>
      <h2 className="text-2xl text-white">Daniel</h2>
    </main>
  )
}
