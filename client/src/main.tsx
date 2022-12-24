import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
)
