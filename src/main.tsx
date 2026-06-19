import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import CacPage from './pages/CacPage.tsx'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="flex min-h-screen flex-col bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cac" element={<CacPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
