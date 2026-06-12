import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/globals.css'

import { Layout } from '@/components/layout/Layout'

function App() {
  return (
    <Layout>
      <div className="section-container py-20">
        <h1 className="text-4xl">Layout Test</h1>
      </div>
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)