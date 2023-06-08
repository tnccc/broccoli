<script setup lang="ts">
import { 
  Splide, 
  SplideSlide,
} from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import { imageUrl } from '@/module/imageUtils'

type Props = {
  options: {[key: string]: string | boolean | number},
  sliders: any,
  width?: string,
  height?: string
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
        <figure :class="$style.figure">
          <img
            :src="imageUrl(item.image)" 
            :alt="item.alt"
            :width="width"
            :height="height"
            loading="lazy"
            content-visibility="auto"
          >
        </figure>
        <div :class="$style.description">
          <h2></h2>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;

.container {
  width: 100%;

  .figure {
    position: relative;

    > img {
      width: 100%;
      object-fit: cover;
    }
  }

  .description {
    position: absolute;
    left    : calc(var(--bv) * 4);

    > h3 {
      font-size: calcClamp(20, 32, 767, 1440);
    }
  }
}
</style>