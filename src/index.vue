<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalNavigation from './components/GlobalNavigation.vue'
import SectionOfTop from '@/components/section/OfTop.vue'
import SectionOfConcept from '@/components/section/OfConcept.vue'
import SectionOfMenu from '@/components/section/OfMenu.vue'
import SectionOfGallery from '@/components/section/OfGallery.vue'
import SectionOfLocation from '@/components/section/OfLocation.vue'
import { intersectionObserver } from './module/intersectionObserver'

const elements = ref<NodeListOf<HTMLElement>>()
const navigationElements = ref<NodeListOf<HTMLElement> | null>()
  const options = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}

const navigationStatus = ref(true)
const calculateWindowWidth = computed(() => {
  const display = window.innerWidth
  return display
})

const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId)
  const top = document.getElementById('top')
  if(targetElement) {
    window.scrollTo({
        top     : targetElement === top ? 0 : targetElement.offsetTop,
        behavior: 'smooth',
    })
  }
}

const scrollHandler = (sectionId: string) => {
  if(calculateWindowWidth.value <= 768) {
    scrollToSection(sectionId)
    navigationStatus.value = false
    console.log(sectionId)
  } else {
    scrollToSection(sectionId)
    console.log('desktop')
  }
}


//②画面幅を監視するメソッドを用意
//③scrollが実行されたら、GlobalHeaderのナビゲーションフラグをfalseにする
//④

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
    @scrollToSection="scrollHandler"
    :navigationElements="navigationElements"
    :navigationStatus="navigationStatus"
  />
  <main :class="$style.main">
    {{ calculateWindowWidth }}
    <SectionOfTop 
      id="top"
      :class="[$style.top, 'element', 'top']"
    />
    <SectionOfConcept
      id="concept"
      :class="[$style.concept, $style.margin, 'concept element']"
    />
    <SectionOfMenu
      id="menu"
      :class="[$style.concept, $style.margin, 'menu element']"
    />
    <SectionOfGallery
      id="gallery"
      :class="[$style.gallery, $style.margin, 'gallery element']"
    />
    <SectionOfLocation
      id="location"
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

  @include mediaScreen('tablet') {
    margin-block-start: var(--header-height);
  }

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

