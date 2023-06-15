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

//監視する要素を取得
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
//①GlobalNavigationで押下されたIDを親に伝えてスクロールを処理を行う
const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId)
  const top = document.getElementById('top')
  if(targetElement) {
    if(calculateWindowWidth.value >= 768) {
      window.scrollTo({
        top     : targetElement === top ? 0 : targetElement.offsetTop,
        behavior: 'smooth',
      })
      navigationStatus.value = false
    } else {
      window.scrollTo({
        top     : targetElement === top ? 0 : targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
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
    @scrollToSection="scrollToSection"
    :navigationElements="navigationElements"
    :navigationStatus="navigationStatus"
  />
  <main :class="$style.main">
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
    margin-block-start: calc(var(--bv) * 5);
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

