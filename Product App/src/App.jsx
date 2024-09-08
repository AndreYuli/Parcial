import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Autentication } from './pages/Autentication'
import { Dashboard } from './pages/Dashboard'
import { Register} from './pages/Register'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Autentication />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
