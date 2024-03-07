
/* import axios from 'axios';

// Define la función para obtener al personajes
export const  getPersonajes = async  () => {
  try {
    // Realiza la solicitud GET al endpoint
    const response = await axios.get('http://pruebaapi.myddns.me/public/personajes');

    const data = response.data

    // Devuelve los datos de la respuesta
    console.log('Datos recibidos:', data);
    return data;
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y muestra un mensaje en la consola
    console.error('Error al obtener los personajes:', error);
    // Retorna el error
    return error;
  }
} **/

// Define la función para obtener al personajes
export const getPersonajes = async () => {
  try {
    // Realiza la solicitud GET al endpoint
    const response = await fetch('http://pruebaapi.myddns.me/public/personajes');

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Devuelve los datos de la respuesta
    console.log('Datos recibidos:', data);
    return data;
  } catch (error) {
    // Captura cualquier error que ocurra durante la solicitud y muestra un mensaje en la consola
    console.error('Error al obtener los personajes:', error);
    // Retorna el error
    return error;
  }
}
