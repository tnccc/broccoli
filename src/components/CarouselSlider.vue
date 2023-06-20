<script setup lang="ts">
//@ts-ignore
import { 
  Splide, 
  SplideSlide,
  SplideTrack
} from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';
import { imageUrl } from '@/module/imageUtils'
import { ref ,onMounted } from 'vue';

type Props = {
  options: {[key: string]: string | boolean | number},
  sliders: any,
  width?: string,
  height?: string
}

const props = defineProps<Props>()
const splide = ref()

onMounted(() => {
  if( splide.value && splide.value.splide ) {
    console.log(splide.value.splide.length)
  }
})
</script>

<template>
  <div :class="$style.container">
    <Splide
      ref="splide" 
      :class="$style.slide"
      :options="options"
      :has-track="false"
    >
      <SplideTrack>
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
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar">
        </div>
      </div>
    </Splide>
  </div>
</template>

<style lang="scss">
.splide__progress {
  &__bar {
    background-color: var(--blue);
  }
}
</style>

<style lang="scss" module>
@use '@/assets/scss/function.scss' as *;

.container {
  width: 100%;

  .figure {
    position: relative;
    height  : 100%;

    > img {
      width     : 100%;
      height    : 100%;
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