import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <p>Has iniciado sesión correctamente.</p>
      <Link to="/products">
        <button>Ver Productos</button>
      </Link>
    </div>
  );
};

export default Dashboard;
