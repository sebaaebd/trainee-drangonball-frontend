<template>
  <!-- Contenedor principal -->
  <div class="p-8 flex flex-col items-center">

    <!-- Imagen del logo DBZ -->
    <div class="flex-grow-0 mb-5">
      <img src="../assets/logodbz3.png" alt="Logo" class="h-20 pl-10">
    </div>

    <!-- Contenedor para el botón de búsqueda y el menú desplegable -->
    <div class="flex pl-6">
      <!-- Botón de búsqueda -->
      <div class="flex-none flex w-70 h-8 pl-20">
        <div class="flex items-center bg-search rounded-l-lg border border-search p-2">
          <svg viewBox="0 0 20 20" aria-hidden="true" class="w-5 fill-placeHolderText transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <!-- Campo de entrada para la búsqueda de personajes -->
        <input type="text" v-model="terminoBusqueda" class="w-full bg-search rounded-r-lg px-2 text-base text-placeHolderText font-semibold outline-0 placeholder-placeHolderText" placeholder="Busca un personaje">
      </div>

      <!-- Menú desplegable para seleccionar el universo -->
      <div class="flex-none ml-20 ">
        <select v-model="selectedUniverso" class="pl-3 bg-search w-70 h-8 rounded-lg text-placeHolderText font-semibold">
          <option disabled value="">Selecciona Universo</option>
          <!-- Iteración sobre cada universo y creación de una opción para cada uno -->
          <option v-for="universo in universos" :key="universo.id" :value="universo.NOMBRE_UNIVERSO">
            {{ universo.NOMBRE_UNIVERSO }}
          </option>
          <option value="todos">Todos</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
// Importación de la función para obtener los universos
import { getUniversos } from '../composables/useUniversosInfo.js';

export default {
  data() {
    return {
      // Inicialización de variables de datos
      terminoBusqueda: '',
      universos: [],
      selectedUniverso: ''
    };
  },
  async created() {
    // Obtención de universos cuando se crea el componente
    this.universos = await getUniversos(),
    this.selectedUniverso = ''
  },
  watch: {
    // Observadores para actualizar los valores de 'terminoBusqueda' y 'selectedUniverso'
    terminoBusqueda(newValue) {
      this.$emit('update:terminoBusqueda', newValue);
    },
    
    selectedUniverso(newValue) {
      console.log(newValue);
      this.$emit('update:selectedUniverso', newValue);
    }
  }
}
</script>

