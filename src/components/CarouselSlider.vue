<script setup lang="ts">
import { 
  Splide, 
  SplideSlide,
} from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import { imageUrl } from '@/module/imageUtils'

type Props = {
  options: {[key: string]: string | boolean | number},
  sliders: any
}

const props = defineProps<Props>()

</script>

<template>
  <div :class="$style.container">
    <Splide 
      :class="$style.slide"
      :options="options"
    >
      <SplideSlide
        :class="$style.slider"
        v-for="item in sliders"
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