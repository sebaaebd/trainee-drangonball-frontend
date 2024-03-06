<template>

  <div class="bg-bodyTarjeta rounded-2xl p-5 max-w-screen-lg">

    
    <div class="flex flex-col">
    <div class="flex ">
      <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" @click="volverHome">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-bodyView">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
    </div>
    <div class="flex justify-center">
      <img :src="personaje.IMAGEN" alt="Imagen de {{ personaje.NOMBRE }}" class="w-50 h-32 object-cover rounded-lg">
    </div>
  </div>

    <div class="flex flex-col items-center">
    <h4 class="py-2 text-white font-bold">Nombre: {{ personaje.NOMBRE }}</h4>
    <h2 class="py-2 text-white font-normal">Descripcion: {{ personaje.DESCRIPCION }}</h2>
    <h2 class="py-2 text-white font-normal">Raza: {{ personaje.RAZA }}</h2>
    <h2 class="py-2 text-white font-normal">Universo: {{ personaje.UNIVERSO }}</h2>
    <h2 class="py-2 text-white font-normal">Poderes: {{ personaje.PODERES }}</h2>
  </div>
    <p class="text-base leading-7 text-white text-justify font-normal ">Biografia: {{ personaje.BIOGRAFIA }}</p>
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
        console.log(data)
        this.personaje = data;
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    },
    volverHome(){
      this.$router.push({name:'home'})
    }
  },
  mounted() {
    const ID = this.$route.params.ID;
    this.cargarDetallesPersonaje(ID);
    console.log(ID)
  }
};
</script>