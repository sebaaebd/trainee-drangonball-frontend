export async function loadPersonaje(ID) {
  try {
    const response = await fetch(`http://pruebaapi.myddns.me/public/tarjeta/${ID}`);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del personaje');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al obtener los detalles del personaje:', error);
    throw error;
  }
}

  //(`https://mocki.io/v1/72cd0f18-2f9a-46fe-b443-9fca4e1f9c46${ID}`)