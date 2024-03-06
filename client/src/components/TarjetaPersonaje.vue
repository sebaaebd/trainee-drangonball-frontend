<template>

<div class="p-7" >
  <div v-if="personaje" class="bg-bodyTarjeta max-w-[190px]  rounded-2xl hover:bg-bodyTarjetaHover hover:scale-125 duration-150 p-10 ">
    <img :src="personaje.IMAGEN" alt="Imagen de {{ personaje.NOMBRE }}" class="w-full h-32 object-cover rounded-t-lg ">
    <h4 class="py-2 text-white font-bold">{{ personaje.NOMBRE }}</h4>
    <p class="text-base leading-7 text-white font-semibold">{{ personaje.DESCRIPCION }}</p>
  </div>
</div>

</template>

<script>
export default {
  props: {
    personaje: {
      type: Object,
      required: true
    }
  }
}
</script>

