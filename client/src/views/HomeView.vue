<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col items-center ">
      <!-- Componente de encabezado de la página -->
      <HeaderPage 
            :terminoBusqueda="terminoBusqueda" 
            @update:terminoBusqueda="terminoBusqueda = $event" 
            @update:selectedUniverso="selectedUniverso = $event"
          />
    <!-- Contenedor de tarjetas de personajes -->
    <div class="bg-bodyView bg-opacity-80 mx-auto px-4 p-10 mt-5 mb-20 rounded-lg shadow-md flex flex-wrap justify-center w-9/12 sm:w-9/10 md:max-w-screen-xl lg:w-3/4 xl:w-10/12"> 
      <div v-if="isLoading" class="loader text-placeHolderText">Cargando...</div>
      <div v-else-if="personajesFiltrados.length === 0" class="text-placeHolderText">No se encontraron personajes</div>
      <!-- Iteración sobre cada personaje filtrado y creación de una tarjeta de personaje para cada uno -->
      <TarjetaPersonaje v-for="personaje in personajesFiltrados" :key="personaje.ID" :personaje="personaje" @click="irADetalle(personaje.ID)"/>
      
    </div>
  </div>
</template>


<script>
// Importación de componentes desde su ubicación
import TarjetaPersonaje from '../components/TarjetaPersonaje.vue';
import { getPersonajes } from '../composables/usePersonajesInfo.js';
import HeaderPage from '../components/HeaderPage.vue';

export default {
  // Define los componentes que se van a usar en este componente
  components: {
    TarjetaPersonaje,
    HeaderPage,
  },
  // Define los datos que se van a usar en este componente
  data() {
    return {
      personajes: [], // Array para almacenar los personajes
      terminoBusqueda: '', // Término de búsqueda para filtrar personajes
      selectedUniverso: '', // Universo seleccionado para filtrar personajes,
      isLoading:false,
    };
  },
  // Función que se ejecuta cuando el componente se monta
  async mounted() {
    // Obtiene los personajes y los almacena en el array personajes
    this.isLoading = true;
    this.personajes = await getPersonajes();
    this.isLoading = false;
  },
  // Propiedades computadas
  computed: {
    // Filtra los personajes basándose en el término de búsqueda y el universo seleccionado
    personajesFiltrados() {
      let filtered = this.personajes;
      if (this.terminoBusqueda) {
        filtered = filtered.filter(personaje =>
          personaje.NOMBRE.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
        );
      }
      if (this.selectedUniverso && this.selectedUniverso !== 'todos') {
        filtered = filtered.filter(personaje =>
          personaje.UNIVERSO.toLowerCase() === this.selectedUniverso.toLowerCase()
        );
      }
      return filtered;
    }
  },
  // Métodos
  methods: {
    // Navega a la ruta 'personaje' con el ID del personaje como parámetro
    irADetalle(ID) {
      this.$router.push({ name: 'personaje', params: { ID: ID } });
      console.log(ID)
    },
    // Actualiza el término de búsqueda
    manejarBusqueda(termino) {
      this.terminoBusqueda = termino;
    }
  },
}
</script>






