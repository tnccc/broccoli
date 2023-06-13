<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalNavigation from './components/GlobalNavigation.vue'
import SectionOfTop from '@/components/section/OfTop.vue'
import SectionOfConcept from '@/components/section/OfConcept.vue'
import SectionOfMenu from '@/components/section/OfMenu.vue'
import SectionOfGallery from '@/components/section/OfGallery.vue'
import SectionOfLocation from '@/components/section/OfLocation.vue'
import { intersectionObserver } from './module/intersectionObserver'

//監視する要素を取得
const elements = ref<NodeListOf<HTMLElement>>()
const navigationElements = ref<NodeListOf<HTMLElement> | null>()
  const options = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}

onMounted(() => {
  elements.value = document.querySelectorAll('.element')
  navigationElements.value = document.querySelectorAll('.item[data]')
  const classNames = {
    data: 'data',
    remove: 'concept',
    removeSecond: 'top'
  };
  intersectionObserver(navigationElements.value, elements.value, options, classNames)
})
</script>

<template>
  <GlobalHeader />
  <GlobalNavigation
    :navigationElements="navigationElements"
  />
  <main :class="$style.main">
    <SectionOfTop 
      :class="[$style.top, 'element', 'top']"
    />
    <SectionOfConcept
      :class="[$style.concept, $style.margin, 'concept element']"
    />
    <SectionOfMenu
      :class="[$style.concept, $style.margin, 'menu element']"
    />
    <SectionOfGallery
      :class="[$style.gallery, $style.margin, 'gallery element']"
    />
    <SectionOfLocation
      :class="[$style.location, $style.margin, 'location element']"
    />
  </main>
  <GlobalFooter />
</template>

<style lang="scss" module>
@use '@/assets/scss/mixin' as *;

.main {
  display: flex;
  flex-direction: column;

  .top {
    margin-block-start: calc(var(--bv) * 16);

    @include mediaScreen('tablet') {
      margin-block-start: calc(var(--bv) * 5);
    }
  }

  .margin {
    margin-block-start: calc(var(--bv) * 22);

    @include mediaScreen('tablet') {
      margin-block-start: calc(var(--bv) * 5);
    }
  }
}
</style>

