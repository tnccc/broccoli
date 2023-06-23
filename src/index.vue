<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
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

const desktopStatus = ref('')
const isLoadingDisplay = ref(true)
const sessionStorageStatus = ref(false)
const navigationStatus = ref(true)
const elements = ref<NodeListOf<HTMLElement>>()
const navigationElements = ref<NodeListOf<HTMLElement> | null>()
const observerOptions = {
  root      : null,
  rootMargin: '-50% 0px',
  threshold : 0,
}

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
        document.removeEventListener("wheel", notScroll, false)
	      document.removeEventListener("touchmove", notScroll, false)
      }
    }, 2000)
  })
}

const topAnimation = () => {
  const tl = gsap.timeline()
  const figure = document.querySelector('.figure')
  const image = document.querySelector('.image')
  const titles = document.querySelectorAll(`[class*="text"]`)
  tl
    .to( figure, { y: 0, opacity: 1 }, 1.75)
    .to( image, { scale: 1, opacity: 1 }, 2.25)
    .to( titles[0], { y: 0, opacity: 1, ease: Power4.easeOut }, "-=.1")
    .to( titles[1], { y: 0, opacity: 1, ease: Power4.easeOut })
    .to( titles[2], { y: 0, opacity: 1, ease: Power4.easeOut })
}

const scrollToSection = (sectionId: string) => {
  const targetElement = document.getElementById(sectionId)
  const top = document.getElementById('top')
  if(window.matchMedia('(max-width: 768px)').matches) {
    if(targetElement) {
      window.scrollTo({
        top     : targetElement === top ? 0 : targetElement.offsetTop,
        behavior: 'smooth',
      })
      navigationStatus.value = !navigationStatus.value
      console.log('mobile')
    }
  } else {
    if(targetElement) {
      window.scrollTo({
        top     : targetElement === top ? 0 : targetElement.offsetTop,
        behavior: 'smooth',
      })
      console.log('desktop')
    }
  }
}

onMounted(() => {
  // const keyName = 'loadingViewed'
  // const keyValue = 'true'
  // if(!sessionStorage.getItem(keyName)) {
  //   sessionStorage.setItem(keyName, keyValue)
    
    
  // }
  loadingAnimation()
    topAnimation()
  elements.value = document.querySelectorAll('.element')
  navigationElements.value = document.querySelectorAll('.item[data]')
  const classNames = {
    data: 'data',
    remove: 'concept',
    removeSecond: 'top'
  };
  intersectionObserver(navigationElements.value, elements.value, observerOptions, classNames)
  
})
</script>

<template>
  <LoadingAnimation
    :class="[
      $style.loading_display,
      {[$style.hide]: !isLoadingDisplay}
    ]"
  />
  <GlobalHeader
    @scrollToSection="scrollToSection"
    :navigationStatus="navigationStatus"
  />
  <GlobalNavigation
    @scrollToSection="scrollToSection"
    :navigationElements="navigationElements"
    :isLoadingDisplay="isLoadingDisplay"
  />
  <main 
    :class="[
        $style.main,
        {[$style.hide]: !isLoadingDisplay}
      ]"
  >
    {{ desktopStatus }}
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
  display       : flex;
  flex-direction: column;
  transition    : margin 2s;

  @include mediaScreen('tablet') {
    &.hide {
      margin-block-start: var(--header-height);
    }
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
      padding-block-start: var(--header-height);
    }
  }
}
</style>

