<script setup>
import { RouterView } from 'vue-router'

</script>

<template>


    <div class="bg-imageBrackGround bg-fixed min-h-screen flex justify-center items-center">
      <RouterView />
    </div>
  
</template>

<style scoped>
.bg-imageBrackGround {
  background-image: url('./assets/db-orange2.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;

}

.bg-imageBanner {
  background-image: url('./assets/banner.jpg');


}
</style>
