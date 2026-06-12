import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <h1 className="text-4xl font-bold text-brand-green">
        InAmigos Foundation 🚀
      </h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)