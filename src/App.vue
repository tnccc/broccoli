<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import GlobalNavigation from './components/GlobalNavigation.vue'
import SectionOfTop from '@/components/section/OfTop.vue'
import SectionOfConcept from '@/components/section/OfConcept.vue'
import SectionOfMenu from '@/components/section/OfMenu.vue'
import SectionOfGallery from '@/components/section/OfGallery.vue'
import SectionOfLocation from '@/components/section/OfLocation.vue'
</script>

<template>
    <GlobalHeader />
    <GlobalNavigation />
    <main :class="$style.main">
      <SectionOfTop :class="$style.top" />
      <SectionOfConcept :class="[$style.concept, $style.margin]" />
      <SectionOfMenu :class="[$style.concept, $style.margin]"
      />
      <SectionOfGallery :class="[$style.gallery, $style.margin]"/>
      <SectionOfLocation :class="[$style.location, $style.margin]"/>
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

