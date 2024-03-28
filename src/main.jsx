import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TechProvider } from './providers/TechContext.jsx';
import { UserProvider } from './providers/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
        <App />
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
