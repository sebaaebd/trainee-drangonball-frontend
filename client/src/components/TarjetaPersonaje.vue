<template>
  <!-- Contenedor principal -->
  <div class="p-7" >
    <!-- Verifica si el objeto 'personaje' existe -->
    <div v-if="personaje" class="bg-bodyTarjeta max-w-[190px]  rounded-2xl hover:bg-bodyTarjetaHover hover:scale-125 duration-150 p-10 ">
      <!-- Muestra la imagen del personaje -->
      <img :src="personaje.IMAGEN" alt="Imagen de {{ personaje.NOMBRE }}" class="w-full h-32 object-cover rounded-t-lg ">
      <!-- Muestra el nombre del personaje -->
      <h4 class="py-2 text-white font-bold">{{ personaje.NOMBRE }}</h4>
      <!-- Muestra la descripción del personaje -->
      <p class="text-base leading-7 text-white font-semibold">{{ personaje.DESCRIPCION }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Define las propiedades que se pasan al componente
  props: {
    // Propiedad 'personaje' que se requiere y debe ser de tipo Object
    personaje: {
      type: Object,
      required: true
    }
  }
}
</script>

