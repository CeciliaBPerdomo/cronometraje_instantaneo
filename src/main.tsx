import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CacPage from './pages/CacPage.tsx'
import ConociendoColoniaPage from './pages/ConociendoColoniaPage.tsx'
import ComboPage from './pages/Combo.tsx'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="flex min-h-screen flex-col bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cac" element={<CacPage />} />
          <Route path="/conociendo-colonia-mtb" element={<ConociendoColoniaPage />} />
          <Route path="/combo" element={<ComboPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
