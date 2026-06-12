import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { CausesPage } from '@/pages/CausesPage'
import { ImpactPage } from '@/pages/ImpactPage'

// ADD THESE IMPORTS HERE ↓
import { DonatePage } from '@/pages/DonatePage'
import { VolunteerPage } from '@/pages/VolunteerPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/impact" element={<ImpactPage />} />

          {/* ADD THESE ROUTES */}
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App