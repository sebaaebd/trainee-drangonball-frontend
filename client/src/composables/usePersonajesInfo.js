// Este archivo se encarga de realizar la conexión a la API y obtener los datos de los usuarios

/**
export const getPersonajes = async () => {
  try {
    const options = {
      method: 'GET', 
      headers: {
        'ngrok-skip-browser-warning': 'cualquier-valor-aqui',
        'Content-Type': 'application/json',
      }
    };

    const response = await fetch('https://mocki.io/v1/ecfb0cb4-33e4-4ea3-9363-87db87efc672', options);
    if (!response.ok) {
      throw new Error('Error al obtener los personajes');
    }

    const contentType = response.headers.get('Content-Type');
    console.log(contentType);

    const data = await response.json();
    console.log('Personajes cargados');
    return data;

  } catch (error) {
    console.error('Error al obtener los personajes:', error);
    return [];
  }
}
*/



import axios from 'axios';

// Define la función para obtener los personajes
export const  getPersonajes = async  () => {
  try {
    // Realiza la solicitud GET al endpoint usando Axios
    const response = await axios.get('http://pruebaapi.myddns.me/public/personajes');

    const data = response.data

    // Devuelve los datos de la respuesta
    console.log('Datos recibidos:', data);
    return data;
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y muestra un mensaje en la consola
    console.error('Error al obtener los personajes:', error);
    // Devuelve un arreglo vacío o maneja el error de otra manera según lo necesites
    return [];
  }
}
