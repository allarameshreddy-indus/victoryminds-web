import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import Technologies from './pages/Technologies'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Navigate to="/clients" replace />} />
          <Route path="solutions" element={<Navigate to="/about" replace />} />
          <Route path="careers" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
