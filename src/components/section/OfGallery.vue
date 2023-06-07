<script setup lang="ts">
import SectionOfHeader from '@/components/section/OfHeader.vue'
import SectionOfContainer from '@/components/section/OfContainer.vue'
import CarouselSlider from '@/components/CarouselSlider.vue'
import { sliderImage } from '@/assets/data/sliderImage'
import { thumbnailImage } from '@/assets/data/thumbnailImage'
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
          :class="$style.slider" 
          :sliders="sliderImage"
          :options="{
            type: 'slide',
            arrows: false,
            direction: 'ttb',
            height: '34rem',
            pagination: false,
          }"
        />
        <CarouselSlider 
          :class="$style.thumbnail"
          :sliders="thumbnailImage"
          :options="{
            gap: 0,
            arrows: false,
            pagination: false,
            isNavigation: true,
            direction: 'ttb',
            heightRatio: 1.5,
            perPage: 4,
          }"
        >
        </CarouselSlider>
      </div>
    </SectionOfContainer>
  </section>
</template>

<style lang="scss" module>
.gallery {
  --slider-width: calc(100% - calc(var(--bv) * 35));
  
  .contents {
    margin-block-start: calc(var(--bv) * 15);
    display: flex;
    
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