<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';
import SectionOfTop from '@/components/section/OfTop.vue'
</script>

<template>
    <GlobalHeader />
    <main :class="$style.main">
      <SectionOfTop />
    </main>
</template>

<style lang="scss" module>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100dvh - var(--header-height));
}
</style>

