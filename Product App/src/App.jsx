import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { Autentication } from './pages/Autentication';
import Dashboard from './pages/Dashboard';
import { Register } from './pages/Register';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Autentication />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
