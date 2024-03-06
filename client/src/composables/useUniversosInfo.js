

import axios from 'axios';

// Define la función para obtener los personajes
export const  getUniversos = async  () => {
  try {
    // Realiza la solicitud GET al endpoint usando Axios
    const response = await axios.get('https://mocki.io/v1/e192a42e-eb42-465a-a0be-8cb84f905a72');

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

