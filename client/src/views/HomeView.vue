<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col items-center">

    <!-- Componente de encabezado de la página -->
    <HeaderPage 
      :terminoBusqueda="terminoBusqueda" 
      @update:terminoBusqueda="terminoBusqueda = $event" 
      @update:selectedUniverso="selectedUniverso = $event"
    />

    <!-- Contenedor de tarjetas de personajes -->
    <div class="bg-bodyView bg-opacity-80 mx-auto px-4 p-10 mt-5 mb-20 rounded-lg shadow-md flex flex-wrap justify-center w-9/12 sm:w-9/10 md:max-w-screen-xl lg:w-3/4 xl:w-10/12"> 
      <!-- Iteración sobre cada personaje filtrado y creación de una tarjeta de personaje para cada uno -->
      <TarjetaPersonaje v-for="personaje in personajesFiltrados" :key="personaje.ID" :personaje="personaje" @click="irADetalle(personaje.ID)"/>
    </div>

  </div>
</template>


<script>
import TarjetaPersonaje from '../components/TarjetaPersonaje.vue';
import { getPersonajes } from '../composables/usePersonajesInfo.js';
import HeaderPage from '../components/HeaderPage.vue';

export default {
components: {
  TarjetaPersonaje,
  HeaderPage
},
data() {
  return {
    personajes: [],
    terminoBusqueda: '',
    selectedUniverso: ''
  };
},
async mounted() {
  this.personajes = await getPersonajes();
},
computed: {
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
methods: {
  irADetalle(ID) {
    this.$router.push({ name: 'personaje', params: { ID: ID } });
    console.log(ID)
  },
  manejarBusqueda(termino) {
    this.terminoBusqueda = termino; // Actualizar el término de búsqueda
  }
},

}
</script>



