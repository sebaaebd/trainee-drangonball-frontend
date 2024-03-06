// Función asíncrona para cargar los detalles de UN personaje
export async function loadPersonaje(ID) {
  try {
    // Realiza una solicitud HTTP GET a la API para obtener los detalles del personaje
    const response = await fetch(`http://pruebaapi.myddns.me/public/tarjeta/${ID}`);
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del personaje');
    }
    // Devuelve la respuesta
    return await response.json();
  } catch (error) {
    // Si hay un error, lo registra en la consola y lo lanza para que pueda ser manejado por el código que llamó a esta función
    console.error('Error al obtener los detalles del personaje:', error);
    throw error;
  }
}

