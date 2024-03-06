<template>
  <div class="p-8">
    <!-- Imagen del logo a la izquierda -->
    <div class="flex-grow-0 mb-5">
      <img src="../assets/logodbz3.png" alt="Logo" class="h-14 pl-10">
    </div>

    <!-- Search Button en el centro -->
    <div class="rounded-lg bg-search flex-grow">
      <div class="flex justify-center">
        <div class="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-search bg-search p-5">
          <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-placeHolderText Hover-500 transition">
            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
          </svg>
        </div>
        <input type="text" v-model="terminoBusqueda" class="w-full max-w-[160px] bg-search ml-1 pl-2 text-base text-placeHolderText font-normal outline-0 placeholder-placeHolderText" placeholder="Busca un personaje" id="">
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      terminoBusqueda: ''
    };
  },
  watch: {
    terminoBusqueda(newValue) {
      this.$emit('update:terminoBusqueda', newValue);
    }
  }
}
</script>



<style>
.bg-imgLogo {
  background-image: url('./assets/logodbz.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;

}
</style>