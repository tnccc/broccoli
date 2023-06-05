<script setup lang="ts">
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { imageUrl } from '@/module/imageUtils'
import { sliderImage } from '@/assets/data/sliderImage'

</script>

<template>
  <div :class="$style.container">
    <Splide 
      :class="$style.slide"
      :options="{
        type: 'slide',
        arrows: false
      }"
    >
      <SplideSlide
        :class="$style.slider"
        v-for="item in sliderImage"
      >
        <img :src="imageUrl(item.image)" alt="item.alt">
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss" module>
.container {
  width: 100%;

  
}
</style>