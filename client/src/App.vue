<template>
  <!-- Contenedor principal con una imagen de fondo -->
  <div class="bg-imageBrackGround bg-fixed min-h-screen flex justify-center items-center">
    <!-- Vista del enrutador que se renderizará dependiendo de la ruta actual -->
    <RouterView />
  </div>
</template>

<script setup>
  // Importación de la vista del enrutador de 'vue-router'
  import { RouterView } from 'vue-router'
</script>

<style scoped>
  /* Estilos para el contenedor principal */
  .bg-imageBrackGround {
    /* Establece la imagen de fondo */
    background-image: url('./assets/db-orange2.jpg');
    /* Asegura que la imagen de fondo cubra todo el contenedor */
    background-size: cover;
    /* Centra la imagen de fondo */
    background-position: center;
    /* Establece la altura mínima del contenedor al 100% de la altura de la ventana */
    min-height: 100vh;
  }
</style>

