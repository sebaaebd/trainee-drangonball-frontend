<template>
 <div class="bg-bodyView bg-opacity-80 max-w-screen-xl mx-auto px-4 p-10 mt-20 mb-20 rounded-lg shadow-md flex flex-wrap justify-center" > 
  <div class="bg-bodyTarjeta max-w-[190px] rounded-2xl p-10 ">
    <img :src="personaje.IMAGEN" alt="Imagen de {{ personaje.NOMBRE }}" class="w-full h-32 object-cover rounded-t-lg ">
    <h4 class="py-2 text-white font-bold">{{ personaje.NOMBRE }}</h4>
    <h2 class="py-2 text-white font-bold">{{ personaje.RAZA }}</h2>
    <h2 class="py-2 text-white font-bold">{{ personaje.PODERES }}</h2>
    <p class="text-base leading-7 text-white font-semibold">{{ personaje.BIOGRAFIA }}</p>
  </div>
    </div>
</template>

<script>

import { loadPersonaje } from '../composables/usePersonajeDetalle.js';

export default {
  data() {
    return {
      personaje: {}
    };
  },
  methods: {
    async cargarDetallesPersonaje(ID) {
      try {
        const data = await loadPersonaje(ID);
        this.personaje = data;
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    }
  },
  mounted() {
    const ID = this.$route.params.ID;
    this.cargarDetallesPersonaje(ID);
  }
};
</script>