import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const registerService = async (e) => {
    e.preventDefault();

    if (contraseña !== confirmarContraseña) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.',
      });
      return;
    }

    const data = {
      nombre,
      correo,
      contraseña
    };

    try {
      const response = await axios.post("https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar", data);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Tu cuenta ha sido creada exitosamente.',
        }).then(() => {
          navigate("/login");
        });
      }
    } catch (err) {
      if (err.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        switch (err.response.status) {
          case 400:
            Swal.fire({
              icon: 'error',
              title: 'Solicitud incorrecta',
              text: 'Por favor, verifica los datos ingresados.',
            });
            break;
          case 409:
            Swal.fire({
              icon: 'error',
              title: 'Conflicto',
              text: 'El correo electrónico ya está registrado. Por favor, usa otro correo.',
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
        // La solicitud fue hecha pero no se recibió respuesta
        Swal.fire({
          icon: 'error',
          title: 'Sin respuesta',
          text: 'No se recibió respuesta del servidor. Por favor, verifica tu conexión a internet.',
        });
      } else {
        // Algo pasó al configurar la solicitud
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
      <div>
        <h5>Registro</h5>
        <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo electrónico" onChange={(e) => setCorreo(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
        <input type="password" placeholder="Confirmar contraseña" onChange={(e) => setConfirmarContraseña(e.target.value)} />
        <button onClick={registerService}>Registro</button>
      </div>
    </div>
  );
};

export default Register;
