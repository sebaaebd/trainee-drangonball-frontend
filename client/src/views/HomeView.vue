<template>
  <div class="flex flex-col items-center">
    <HeaderPage :terminoBusqueda="terminoBusqueda" @update:terminoBusqueda="terminoBusqueda = $event" />
    <div class="bg-bodyView bg-opacity-80 max-w-screen-xl mx-auto px-4 p-10 mt-20 mb-20 rounded-lg shadow-md flex flex-wrap justify-center"> 
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
    terminoBusqueda: ''
  };
},
async mounted() {
  this.personajes = await getPersonajes();
},
computed: {
  personajesFiltrados() {
    if (!this.terminoBusqueda) {
      return this.personajes;
    } else {
      return this.personajes.filter(personaje =>
        personaje.NOMBRE.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
        
      );
    }
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



