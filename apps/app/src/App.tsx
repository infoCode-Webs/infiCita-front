
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'

// Páginas
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Terms from './pages/legal/Terms'
import Privacy from './pages/legal/Privacy'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to="/registro" replace />} />

        {/* Autenticación */}
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Páginas legales */}
        <Route path="/terminos" element={<Terms />} />

        {/* Política de privacidad */}
        <Route path="/privacidad" element={<Privacy />} />

        {/* Ruta no encontrada */}
        <Route path="*" element={<Navigate to="/registro" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
