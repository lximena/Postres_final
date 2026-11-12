import { BrowserRouter, Routes, Route } from 'react-router-dom'
import H from './h.jsx'
import Tar from './Tar.jsx'
import FormularioPage from './FormularioPage.jsx'
import useTarjetas from '../Hook/useTarjetas.js'

export default function App() {
  const { tarjeta, agregar } = useTarjetas()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<H />} />
        <Route path="/Tarjetas" element={<Tar tarjeta={tarjeta} />} />
        <Route path="/Formulario" element={<FormularioPage agregar={agregar} />} />
        <Route path="*" element={<Tar tarjeta={tarjeta} />} />
      </Routes>
    </BrowserRouter>
  )
}
