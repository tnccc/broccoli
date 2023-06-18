<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalNavigation from '@/components/GlobalNavigation.vue'
import SectionOfTop from '@/components/section/OfTop.vue'
import SectionOfConcept from '@/components/section/OfConcept.vue'
import SectionOfMenu from '@/components/section/OfMenu.vue'
import SectionOfGallery from '@/components/section/OfGallery.vue'
import SectionOfLocation from '@/components/section/OfLocation.vue'
import { intersectionObserver } from '@/module/intersectionObserver'
import LoadingAnimation from '@/components/LoadingAnimation.vue'
LoadingAnimation

const isLoadingDisplay = ref(true)
const navigationStatus = ref(true)
const elements = ref<NodeListOf<HTMLElement>>()

const loadingAnimation = () => {
  nextTick(() => {
    setTimeout(() => {
      isLoadingDisplay.value = false
    }, 2000)
  })
}

const calculateWindowWidth = computed(() => {
  const display = window.innerWidth
  return display
})

const navigationElements = ref<NodeListOf<HTMLElement> | null>()
  const options = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}

//②画面幅を監視するメソッドを用意
//③画面幅によってスクロールの処理を分岐する関数を用意
//④画面幅が768以下で関数が実行されたら、GlobalHeaderのナビゲーションフラグをfalseにする
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

onMounted(() => {
  loadingAnimation()
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
  <LoadingAnimation
    :class="[
      $style.loading_display,
      {[$style.hide]: !isLoadingDisplay}
    ]"
  />
  <GlobalHeader :navigationStatus="navigationStatus"/>
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

.loading_display {
  --loading-delay: 1s;
  position       : fixed;
  transition     : all var(--loading-delay);
  opacity        : 1;
  z-index        : var(--z-index-max);

  &.hide {
    opacity   : 0;
    visibility: hidden;
    z-index   : -1;
  }
}

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

