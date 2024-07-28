import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PlayerContextProvider from './context/PlayerContext.jsx'
import SidebarContextProvider from './context/SidebarContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SidebarContextProvider>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>,
)
