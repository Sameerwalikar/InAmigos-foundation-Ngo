import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

/**
 * Root layout wrapper. Navbar + content slot + Footer + toast provider.
 */
export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { fontFamily: 'Nunito, sans-serif', fontSize: 14 },
          success: { iconTheme: { primary: '#1B6B3A', secondary: 'white' } },
        }}
      />
    </div>
  )
}