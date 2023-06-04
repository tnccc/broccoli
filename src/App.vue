<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
import SectionOfTop from '@/components/section/OfTop.vue'
import SectionOfConcept from '@/components/section/OfConcept.vue'
import SectionOfMenu from '@/components/section/OfMenu.vue'
import SectionOfGallery from '@/components/section/OfGallery.vue'
</script>

<template>
    <GlobalHeader />
    <main :class="$style.main">
      <SectionOfTop :class="$style.top" />
      <SectionOfConcept :class="[$style.concept, $style.margin]" />
      <SectionOfMenu :class="[$style.concept, $style.margin]"/>
      <SectionOfGallery :class="[$style.gallery, $style.margin
    ]"/>
    </main>
</template>

<style lang="scss" module>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100dvh - var(--header-height));

  .top {
    margin-block-start: calc(var(--bv) * 16);
  }

  .margin {
    margin-block-start: calc(var(--bv) * 22);
  }
}
</style>

