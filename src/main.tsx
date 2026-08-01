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
import Resultados6k from './TripleCorona/Campeonato/Resultados_6k.tsx'
import Resultados12k from './TripleCorona/Campeonato/Resultados12k.tsx'
import Resultados21k from './TripleCorona/Campeonato/Resultados21k.tsx'

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
          <Route path="/triple-corona/resultados-6k" element={<Resultados6k />} />
          <Route path="/triple-corona/resultados-12k" element={<Resultados12k />} />
          <Route path="/triple-corona/resultados-21k" element={<Resultados21k />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  </StrictMode>,
)
