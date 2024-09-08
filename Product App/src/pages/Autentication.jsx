import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Autentication.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Autentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginService = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post("https://parcial.nucleoslabs.com.co/api/v1/usuarios/login", data);
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            Swal.fire({
              icon: 'error',
              title: 'Solicitud incorrecta',
              text: 'Por favor, verifica los datos ingresados.',
            });
            break;
          case 401:
            Swal.fire({
              icon: 'error',
              title: 'No autorizado',
              text: 'El email o la contraseña son incorrectos. Por favor, inténtalo de nuevo.',
            });
            break;
          case 500:
            Swal.fire({
              icon: 'error',
              title: 'Error del servidor',
              text: 'Ocurrió un problema en el servidor. Por favor, inténtalo más tarde.',
            });
            break;
          default:
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.',
            });
        }
      } else if (err.request) {

        Swal.fire({
          icon: 'error',
          title: 'Sin respuesta',
          text: 'No se recibió respuesta del servidor. Por favor, verifica tu conexión a internet.',
        });
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al configurar la solicitud. Por favor, inténtalo de nuevo.',
        });
      }
    }
  };

  return (
    <div className="contenedor">
      <h5>Login</h5>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginService}>Login</button>
    </div>
  );
};

export default Autentication;
