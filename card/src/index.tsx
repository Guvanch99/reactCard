import React, { FC } from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import './core/styles/reset.css'

const App: FC = () => (
  <Routes/>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
