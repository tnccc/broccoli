<script setup lang="ts">
import { computed, onMounted, ref, nextTick, onUpdated } from 'vue'
import { gsap, Power4, Circ } from 'gsap'
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

const isLoadingDisplay = ref(true)
const navigationStatus = ref(true)
const elements = ref<NodeListOf<HTMLElement>>()

const notScroll = (e: any) => {
  e.preventDefault()
}

const loadingAnimation = () => {
  document.addEventListener("wheel", notScroll, { passive: false })
	document.addEventListener("touchmove", notScroll, { passive: false })
  nextTick(() => {
    setTimeout(() => {
      isLoadingDisplay.value = false
      if(!isLoadingDisplay.value) {
        document.removeEventListener("wheel", notScroll, { passive: false })
	      document.removeEventListener("touchmove", notScroll, { passive: false })
      }
    }, 2000)
  })
}

const topAnimation = () => {
  const tl = gsap.timeline()
  const header = document.querySelector('#header')
  const figure = document.querySelector('.figure')
  const image = document.querySelector('.image')
  const titles = document.querySelectorAll(`[class*="text"]`)
  tl
    .to( figure, { y: 0, opacity: 1 }, 1.75)
    .to( image, { scale: 1, opacity: 1 }, 2.25)
    .to( titles[0], { y: 0, opacity: 1, ease: Power4.out }, "-=.1")
    .to( titles[1], { y: 0, opacity: 1, ease: Power4.out })
    .to( titles[2], { y: 0, opacity: 1, ease: Power4.out })
    .to( header, { y: 0, opacity: 1, ease: Circ.out}, "-=.1"
  )
}

// const sessionStorageHandler = () => {
//   const keyName = 'loadingviewed'
//   const keyValue = 'true'
//   if(!sessionStorage.getItem(keyName)) {
//     sessionStorage.setItem(keyName, keyValue)
//     loadingAnimation()
//   } else {
//     return 
//   }
// }

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
  topAnimation()
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
    :isLoadingDisplay="isLoadingDisplay"
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

