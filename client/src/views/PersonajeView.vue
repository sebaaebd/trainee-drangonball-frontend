<template>
  <!-- Contenedor principal de la tarjeta del personaje -->
  <div class="bg-bodyTarjeta rounded-2xl p-5 max-w-screen-lg">

    <!-- Contenedor para el botón de regreso y la imagen del personaje -->
    <div class="flex flex-col">
      <!-- Botón para volver a la página principal -->
      <div class="flex ">
        <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" @click="volverHome">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-bodyView">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
          </svg>
        </button>
      </div>
      <!-- Imagen del personaje -->
      <div class="flex justify-center">
        <img :src="personaje.IMAGEN" alt="Imagen de {{ personaje.NOMBRE }}" class="w-60 h-50 object-cover rounded-lg">
      </div>
    </div>

    <!-- Contenedor para los detalles del personaje -->
    <div class="flex flex-col items-center">
  <h4 class="py-1 text-white"><span class="font-bold">Nombre:</span> {{ personaje.NOMBRE }}</h4>
  <h2 class="py-1 text-white"><span class="font-bold">Descripcion:</span> {{ personaje.DESCRIPCION }}</h2>
  <h2 class="py-1 text-white"><span class="font-bold">Raza:</span> {{ personaje.RAZA }}</h2>
  <h2 class="py-1 text-white"><span class="font-bold">Universo:</span> {{ personaje.UNIVERSO }}</h2>
  <h2 class="py-1 text-white"><span class="font-bold">Poderes:</span> {{ personaje.PODERES }}</h2>
</div>
<!-- Biografía del personaje -->
<p class="text-base leading-7 text-white text-justify"><span class="font-semibold">Biografia:</span> {{ personaje.BIOGRAFIA }}</p>
    <div v-if="isLoading" class="loader">Cargando...</div>
  </div>
</template>

<script>
// Importación de la función para cargar los detalles del personaje
import { loadPersonaje } from '../composables/usePersonajeDetalle.js';

export default {
  data() {
    return {
      // Inicialización del objeto personaje
      personaje: {},
      isLoading:false,
    };
  },
  methods: {
    // Método para cargar los detalles del personaje
    async cargarDetallesPersonaje(ID) {
      try {
        const data = await loadPersonaje(ID);
        console.log(data)
        this.personaje = data;
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    },
    // Método para volver a la página principal
    volverHome(){
      this.$router.push({name:'home'})
    }
  },
  // Cuando se monta el componente, se cargan los detalles del personaje
  mounted() {
    this.isLoading = true;
    const ID = this.$route.params.ID;
    this.cargarDetallesPersonaje(ID);
    this.isLoading = false;
  }
};
</script>

