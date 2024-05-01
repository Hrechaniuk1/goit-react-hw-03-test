import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App'
import App from './components/App.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root'), {
  identifierPrefix: 'contacts-book-app-'
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
