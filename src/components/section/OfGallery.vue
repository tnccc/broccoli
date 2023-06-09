<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Splide } from '@splidejs/vue-splide'
import SectionOfHeader from '@/components/section/OfHeader.vue'
import SectionOfContainer from '@/components/section/OfContainer.vue'
import CarouselSlider from '@/components/CarouselSlider.vue'
import { sliderImage } from '@/assets/data/sliderImage'
import { thumbnailImage } from '@/assets/data/thumbnailImage'

const mainSlider = ref<InstanceType<typeof Splide>>()
const thumbnailSliderRef = ref<InstanceType<typeof Splide>>()

onMounted(() => {
  const thumbnailSlider = thumbnailSliderRef.value?.splide
  if(thumbnailSlider) {
    mainSlider.value?.sync(thumbnailSlider)
  }
})
</script>

<template>
  <section :class="$style.gallery">
    <SectionOfContainer>
      <SectionOfHeader
        :direction="'right'"
        :first="'GAL'"
        :second="'LERY'"
        :ja="'ギャラリー'"
      />
      <div :class="$style.contents">
        <CarouselSlider
          :sliderRef="mainSlider" 
          :class="[$style.slider, 'slider']" 
          :sliders="sliderImage"
          :options="{
            type: 'loop',
            autoplay: true,
            updateOnMove: true,
            speed: 2000,
            arrows: false,
            direction: 'ttb',
            height: '34rem',
            pagination: false,
            drag: false,
          }"
        />
        <CarouselSlider 
          :sliderRef="thumbnailSliderRef"
          :class="[$style.thumbnail, 'thumbnail']"
          :sliders="thumbnailImage"
          :options="{
            gap: 0,
            arrows: false,
            pagination: false,
            isNavigation: true,
            rewind: true,
            direction: 'ttb',
            height: '100%',
            perPage: 4,
          }"
        >
        </CarouselSlider>
      </div>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss">
.slider {

  .splide__slide {
    > img {
      height: 100%;
    }
  }
}

.thumbnail {
  position: relative;
  top: calc(var(--bv) * -1);
  left: calc(var(--bv) * -6);

  .splide__track {
    overflow: visible;
  }

  .splide__slide {
    position: relative;
    
    img {
      border-radius: calc(var(--bv) / 2);
    }

    &::before {
      content         : "";
      width           : 100%;
      height          : 100%;
      position        : absolute;
      top             : 0;
      left            : 0;
      background-color: var(--background-filter-color);
    }
  }

  .splide__track--ttb > .splide__list {
    display       : flex;
    flex-direction: column;
    gap           : calc(var(--bv) * 2) 0;
    height        : 100%;
  }
  
  .splide__track--nav>.splide__list>.splide__slide {
    border: none;
  }

  .splide__track--nav>.splide__list>.splide__slide.is-active {
    border: none;
  }
}
</style>

<style lang="scss" module>
.gallery {
  --slider-width: calc(100% - calc(var(--bv) * 35));
  
  .contents {
    margin-block-start: calc(var(--bv) * 15);
    display           : flex;
    align-items       : center;
    
    .slider {
      flex : 0 0 var(--slider-width);
      width: var(--slider-width);
    }

    .thumbnail {
      
      > ul {
        flex-direction: column;
      }
    }
  }
}
</style>